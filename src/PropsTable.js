import React from "react";

export default function PropsTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>items</code>
            </td>
            <td>
              <code>List</code>
            </td>
            <td>[]</td>
            <td>list of items.</td>
          </tr>
          <tr>
            <td>
              <code>selectedItems</code>
            </td>
            <td>
              <code>Array</code>
            </td>
            <td>[]</td>
            <td>selected list to start with (subgroup of items).</td>
          </tr>
          <tr>
            <td>
              <code>onChange</code>
            </td>
            <td>
              <code>function</code>
            </td>
            <td>()=&gt;{}</td>
            <td>callback for changed event.</td>
          </tr>
          <tr>
            <td>
              <code>loading</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>false</td>
            <td>toggle to show loading indication.</td>
          </tr>
          <tr>
            <td>
              <code>showSearch</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>true</td>
            <td>toggle to show search option.</td>
          </tr>
          <tr>
            <td>
              <code>showSelectAll</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>true</td>
            <td>toggle to show select all option in list.</td>
          </tr>
          <tr>
            <td>
              <code>showSelectedItems</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>true</td>
            <td>toggle to show selected items right pane.</td>
          </tr>
          <tr>
            <td>
              <code>wrapperClassName</code>
            </td>
            <td>
              <code>String</code>
            </td>
            <td>&#39;&#39;</td>
            <td>wrapper class name - Used for customizing the style.</td>
          </tr>
          <tr>
            <td>
              <code>height</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>400</td>
            <td>available items list height.</td>
          </tr>
          <tr>
            <td>
              <code>itemHeight</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>40</td>
            <td>the height of an item in the list.</td>
          </tr>
          <tr>
            <td>
              <code>selectedItemHeight</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>itemHeight</code>
            </td>
            <td>the height of the selected item in the list.</td>
          </tr>
          <tr>
            <td>
              <code>selectAllHeight</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>itemHeight</code>
            </td>
            <td>
              the height of the selectAll component, by default will use the
              value of the itemHeight.
            </td>
          </tr>
          <tr>
            <td>
              <code>maxSelectedItems</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td></td>
            <td>
              defines the maximum items that can be selected, overrides
              showSelectAll.
            </td>
          </tr>
          <tr>
            <td>
              <code>filterFunction</code>
            </td>
            <td>
              <code>function</code>
            </td>
            <td>based on label</td>
            <td>
              The function used to filter items based on the search query.
            </td>
          </tr>
          <tr>
            <td>
              <code>searchRenderer</code>
            </td>
            <td>
              <code>Component</code>
            </td>
            <td></td>
            <td>Component to replace the default Search component.</td>
          </tr>
          <tr>
            <td>
              <code>selectedItemRenderer</code>
            </td>
            <td>
              <code>Component</code>
            </td>
            <td></td>
            <td>
              Component to replace the default selected item component in the
              destination list.
            </td>
          </tr>
          <tr>
            <td>
              <code>loaderRenderer</code>
            </td>
            <td>
              <code>Component</code>
            </td>
            <td></td>
            <td>Component to replace the default loader component.</td>
          </tr>
          <tr>
            <td>
              <code>selectAllRenderer</code>
            </td>
            <td>
              <code>Component</code>
            </td>
            <td></td>
            <td>Component to replace the default select all component.</td>
          </tr>
          <tr>
            <td>
              <code>itemRenderer</code>
            </td>
            <td>
              <code>Component</code>
            </td>
            <td></td>
            <td>
              Component to replace the default item component in the source
              list.
            </td>
          </tr>
          <tr>
            <td>
              <code>selectionStatusRenderer</code>
            </td>
            <td>
              <code>Component</code>
            </td>
            <td></td>
            <td>
              Component to replace the default selection status component.
            </td>
          </tr>
          <tr>
            <td>
              <code>noItemsRenderer</code>
            </td>
            <td>
              <code>Component</code>
            </td>
            <td></td>
            <td>Component to replace the default no items component.</td>
          </tr>
          <tr>
            <td>
              <code>searchValue</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td></td>
            <td>The value of the search field.</td>
          </tr>
          <tr>
            <td>
              <code>searchValueChanged</code>
            </td>
            <td>
              <code>function</code>
            </td>
            <td></td>
            <td>
              Function to handle the change of search field. Accepts value as a
              single argument.
            </td>
          </tr>
          <tr>
            <td>
              <code>responsiveHeight</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>400px</td>
            <td>
              Responsive height of the wrapping component, can send percent for
              example: <code>70%</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>withGrouping</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>false</td>
            <td>
              Your items will be grouped by the group prop values - see
              &quot;item grouping&quot; section below
            </td>
          </tr>
          <tr>
            <td>
              <code>showSelectedItemsSearch</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>false</td>
            <td>toggle to show search option in detination list.</td>
          </tr>
          <tr>
            <td>
              <code>searchSelectedItemsValue</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td></td>
            <td>The value of the search field for destination list.</td>
          </tr>
          <tr>
            <td>
              <code>searchSelectedItemsChanged</code>
            </td>
            <td>
              <code>function</code>
            </td>
            <td></td>
            <td>
              Function to handle the change of search field for destination
              list. Accepts value as a single argument.
            </td>
          </tr>
          <tr>
            <td>
              <code>selectedItemsFilterFunction</code>
            </td>
            <td>
              <code>function</code>
            </td>
            <td>based on label</td>
            <td>
              Is the same as filterFunction by default to filter items based on
              the search query in destination list.
            </td>
          </tr>
          <tr>
            <td>
              <code>isLocked</code>
            </td>
            <td>
              <code>function</code>
            </td>
            <td>
              <code>item =&gt; item.disabled</code>
            </td>
            <td>Function to be used to define whether item is locked or not</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
