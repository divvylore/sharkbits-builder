import React from "react";
import ReactDOM from "react-dom";

import { Container, Text } from "../components/selectors";
import { GridRow } from '../components/selectors/GridRow'
import { GridColumn } from '../components/selectors/GridColumn'
import { Button } from "../components/selectors/Button";
import { Image } from "../components/selectors/Image";
import { Custom1, OnlyButtons } from "../components/selectors/Custom1";
import { Custom3, Custom3BtnDrop } from "../components/selectors/Custom3";
import { Custom4 } from "../components/selectors/Custom4";
import { TextComponent } from '../components/selectors/TextComponent'
import _ from "lodash";


const RESOLVERS = {
  Container,
  GridRow,
  GridColumn,
  Text,
  Custom1,
  Custom3,
  Custom3BtnDrop,
  Custom4,
  OnlyButtons,
  Button,
  TextComponent,
  Image
};
export const getNodeById = (nodes, id) => {
  return _.find(nodes, (node) => node.id === id);
};

const deserializeNodes = (
  nodes,
  id = "ROOT",
  sorted = []
) => {
  const node = nodes[id];
  if (!node) {
    throw new Error(`Could not find node ${id}`);
  }

  sorted.push({ id, ...node });

  _.each(node.nodes, (n) => {
    sorted.push(...deserializeNodes(nodes, n));
  });

  return sorted;
};

export function getDescendants(
  nodes,
  id,
  deep = false,
  includeOnly
) {
  function appendChildNode(
    id,
    descendants = [],
    depth = 0
  ) {
    if (deep || (!deep && depth === 0)) {
      const node = getNodeById(nodes, id);

      if (!node) {
        return descendants;
      }

      if (includeOnly !== "childNodes") {
        // Include linkedNodes if any
        const linkedNodes = node.linkedNodes;

        _.each(linkedNodes, (nodeId) => {
          descendants.push(nodeId);
          descendants = appendChildNode(nodeId, descendants, depth + 1);
        });
      }

      if (includeOnly !== "linkedNodes") {
        const childNodes = node.nodes;

        _.each(childNodes, (nodeId) => {
          descendants.push(nodeId);
          descendants = appendChildNode(nodeId, descendants, depth + 1);
        });
      }

      return descendants;
    }
    return descendants;
  }
  return _.compact(
    _.map(appendChildNode(id), (nid) => getNodeById(nodes, nid))
  );
}

export const renderNode = (
  nodes,
  resolver,
  nodeId
) => {
  const node = getNodeById(nodes, nodeId);

  if (!node) {
    throw new Error(`Could not find node with id ${nodeId}`);
  }

  const resolvedComponent = _.get(resolver, node.type.resolvedName);
  console.log(node.type.resolvedName)
  const descendants = getDescendants(nodes, nodeId);
  const children = _.map(descendants, (descendant) =>
    renderNode(nodes, resolver, descendant.id)
  );

  return React.createElement(
    resolvedComponent,
    { ...node.props, isSSR: true, id: nodeId },
    children
  );
};

const renderNodesToJSX = (
  nodes,
  resolver,
  nodeId
) => {
  return renderNode(nodes, resolver, nodeId);
};

export const generateHtml = (craftJsNodes) => {
  const nodes = deserializeNodes(craftJsNodes);
  const jsx = renderNodesToJSX(nodes, RESOLVERS, "ROOT");
  const body = ReactDOM.hydraRoot(jsx);
  const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charSet="UTF-8" />
        </head>
        <body>
          ${body}
        </body>
      </html>
    `;

  return body;
};
