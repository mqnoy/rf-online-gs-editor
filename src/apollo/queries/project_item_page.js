import gql from 'graphql-tag';
import ProjectIncludeAllTypes from '../fragments/ProjectIncludeAllTypes';
import ItemClientNameParts from '../fragments/ItemClientNameParts';
import ItemServerNameParts from '../fragments/ItemServerNameParts';
import BoxItemOutNameParts from '../fragments/BoxItemOutNameParts';
import BoxItemOutItemListNameParts from '../fragments/BoxItemOutItemListNameParts';

export default gql`
  query($id: String!, $itemId: String!) {
    project(id: $id) {
      title
      description
      name
      id
      createdAt
      updatedAt
      isPublic
      owner {
        id
        login
        role {
          id
          name
          title
        }
      }

      items {
        total
      }

      stores {
        total
      }

      itemsBox: items(where: { type: "box" }) {
        total
      }

      boxItemOuts {
        total
      }

      # include types
      ...ProjectIncludeAllTypes
    }

    item(id: $itemId) {
      id
      type
      nIndex
      isRemoved
      clientND {
        strName
      }
      client {
        ...ItemClientNameParts
      }
      server {
        ...ItemServerNameParts
      }
      boxItemOut {
        id
        nIndex
        ...BoxItemOutNameParts
        ...BoxItemOutItemListNameParts
      }
    }
  }

  # include fragments
  ${ProjectIncludeAllTypes}
  ${ItemClientNameParts}
  ${ItemServerNameParts}
  ${BoxItemOutNameParts}
  ${BoxItemOutItemListNameParts}
`;
