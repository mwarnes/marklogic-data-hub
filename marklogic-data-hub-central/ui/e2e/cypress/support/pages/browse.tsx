class BrowsePage {

  getSelectedEntity() {
    return cy.get('.ant-select-selection-selected-value').invoke('text')
  }

  selectEntity(entity: string) {
    cy.get('#entity-select').click();
    return cy.get('[data-cy=entity-option]').each(function (item) {
      if (item.text() === entity) {
        return item.click();
      }
    });
  }

  getTotalDocuments() {
    return cy.get('[data-cy=total-documents]').eq(0).then(function (value) {
      return parseInt(value.text().replace(/,/g, ""));
    });
  }

  getInstanceViewIcon(){
    return cy.get('[data-cy=instance]');
  }

  getSourceViewIcon(){
    return cy.get('[data-cy=source]');
  }

  getDocuments() {
    return cy.get('[data-cy=document-list-item]');
  }

  getDocument(index: number) {
    return this.getDocuments().eq(index);
  }

  getDocumentEntityName(index: number) {
    return this.getDocument(index).find('[data-cy=entity-name]').invoke('text');
  }

  getDocumentId(index: number) {
    return this.getDocument(index).find('[data-cy=primary-key]').invoke('text');
  }

  getDocumentSnippet(index: number) {
    return this.getDocument(index).find('[data-cy=snipped]').invoke('text');
  }

  getDocumentCreatedOn(index: number) {
    return this.getDocument(index).find('[data-cy=created-on]').invoke('text');
  }

  getDocumentSources(index: number) {
    return this.getDocument(index).find('[data-cy=sources]').invoke('text');
  }

  getDocumentFileType(index: number) {
    return this.getDocument(index).find('[data-cy=file-type]').invoke('text');
  }

  getDocumentById(index: number) {
    return this.getDocument(index).find('[data-cy=instance]');
  }



  /**
   * facet search
   * available facets are 'collection', 'created-on', 'job-id', 'flow', 'step'
   */

  getFacet(facet: string) {
    return cy.get('[data-cy=' + facet + '-facet]');
  }

  getFacetItems(facet: string) {
    return cy.get('[data-cy=' + facet + '-facet-item]');
  }

  getFacetItem(facet: string, str: string) {
    return this.getFacetItems(facet).then(($el) => {
      for (let i = 0; i < $el.length; i++) {
        let $element = Cypress.$($el[i]);
        if ($element.find("label > span:last-child").text().trim() === str) {
          return cy.wrap($element);
        }
      }
    });
  }

  getFacetItemCheckbox(facet: string, str: string) {
    return this.getFacetItem(facet, str).find('[data-cy=' + facet + '-facet-item-checkbox]');
  }

  getFacetValue(facet: string, str: string) {
    return this.getFacetItem(facet, str).find('[data-cy=' + facet + '-facet-item-value]');
  }

  getFacetItemCount(facet: string, str: string) {
    return this.getFacetItem(facet, str).find('[data-cy=' + facet + '-facet-item-count]');
  }

  getClearFacetSearchSelection(facet: string) {
    return cy.get('[data-cy=clear-' + facet + ']');
  }

  clearFacetSearchSelection(facet: string) {
    return cy.get('[data-cy=clear-' + facet +']').click();
  }

  getFacetSearchSelectionCount(facet: string) {
    return cy.get('[data-cy=' + facet + '-selected-count]').invoke('text');
  }

  /*applyFacetSearchSelection(facet: string) {
    return cy.get('[data-cy=' + facet + '-facet-apply-button]').click();
  }
  */

  getSelectedFacets(){
      return cy.get('[data-cy=selected-facet-block]');
  }

  getGreySelectedFacets(facet: string){
    return cy.get('#selected-facets [data-cy=clear-grey-' + facet +']');
  }

  getAppliedFacets(facet: string){
    return cy.get('#selected-facets [data-cy=clear-' + facet +']');
  }

  getClearGreyFacets(){
    return cy.get('[data-cy=clear-all-grey-button]');
  }

  getFacetApplyButton() {
     return cy.get('svg[data-icon="check-square"]')
    //return cy.get('#selected-facets [data-cy=facet-apply-button]');
  }

  getClearAllButton() {
    return cy.get('[data-cy=clear-all-button]');
  }

  applyDatePickerSelection(facet: string) {
    return cy.get('[data-cy=datepicker-facet-apply-button]').click();
  }

  //search bar
  search(str: string) {
    cy.get('[data-cy=search-bar]').type(str);
    cy.get('.ant-input-search-button').click();
    cy.wait(500);
  }

  getShowMoreLink() {
    return cy.get('div[data-cy="show-more"][style="display: block;"]');
  }

  getHubPropertiesExpanded() {
    return cy.get("#hub-properties > div > i").click();
  }

  getExpandableSnippetView() {
    return cy.get('.ant-list-items li:first-child [data-cy = expandable-icon]').click();
  }

  //table, facet view
  getFacetView() {
    return cy.get('[data-cy=facet-view]').click();
  }

  getTableView() {
    return cy.get('[data-cy=table-view]').click();
  }

  //table
  getColumnTitle(index:number) {
    return cy.get(`.ant-table-thead th:nth-child(${index}) .ant-table-column-title`).invoke('text');
  }

  getTableRows() {
    return cy.get('.ant-table-row');
  }

  getTableViewInstanceIcon(){
    return cy.get('.ant-table-row:last-child [data-cy=instance]');
  }

  getTableViewSourceIcon(){
    return cy.get('.ant-table-row:last-child [data-cy=source]');
  }

  getExpandableTableView() {
    return cy.get('.ant-table-row:nth-child(1) .ant-table-row-expand-icon-cell').click();
  }

  getExpandable() {
    return cy.get('.ant-table-row-expand-icon-cell');
  }

  getTableColumns(){
    return cy.get('.react-resizable');
  }

  getTableCell(rowIndex:number, columnIndex:number) {
    return cy.get(`.ant-table-row:nth-child(${rowIndex}) td:nth-child(${columnIndex}) div`).invoke('text')
  }

  getTableUriCell(rowIndex:number) {
    return cy.get(`.ant-table-row:nth-child(${rowIndex}) td:nth-child(2) div span`).invoke('text')
  }

  getTableTitle(index:number) {
    return cy.get(`.ant-table-thead tr th:nth-child(${index}) .ant-table-column-title`);
  }

  getColumnSelectorIcon(){
    return cy.get('[data-cy=column-selector] > div > svg');
  }

  //popover
  getColumnSelector(){
    return cy.get('.ant-popover-inner');
  }

  getTreeItems(){
    return cy.get('.ant-popover-inner ul > li');
  }

  getTreeItem(index:number){
    return cy.get(`.ant-popover-inner ul > li:nth-child(${index})`);
  }

  getTreeItemTitle(index:number){
    return cy.get(`.ant-popover-inner ul > li:nth-child(${index}) span:last-child`);
  }
  getTreeItemChecked(index:number){
     cy.get(`.ant-popover-inner ul > li:nth-child(${index}) .ant-tree-checkbox`).should('not.have.class', 'ant-tree-checkbox-checked') ? cy.get(`.ant-popover-inner ul > li:nth-child(${index}) .ant-tree-checkbox`).click() : '';
  }

  getTreeItemUnchecked(index:number){
    cy.get(`.ant-popover-inner ul > li:nth-child(${index}) .ant-tree-checkbox`).should('have.class', 'ant-tree-checkbox-checked') ? cy.get(`.ant-popover-inner ul > li:nth-child(${index}) .ant-tree-checkbox`).click() : '';
  }

  //Save queries

  getSaveModalIcon() {
    return cy.get('svg[data-icon="save"]')
  }

  getSaveQueryName() {
      return cy.get('#save-query-name');
  }

  getSaveQueryDescription(){
    return cy.get('#save-query-description');
  }

  getSaveQueryButton(){
    return cy.get('#save-query-button');
  }

  getSaveQueryCancelButton(){
    return cy.get('#save-query-cancel-button');
  }

  getSaveQueriesDropdown(){
    return cy.get('#dropdownList');
  }

  getEditQueryModalIcon() {
    return cy.get('svg[data-icon="pencil-alt"]')
  }

  getSaveACopyModalIcon() {
    return cy.get('svg[data-icon="copy"]')
  }

  getEditQueryDetailFormName(){
    return cy.get('#edit-query-detail-name');
  }

  getEditQueryDetailDesc(){
    return cy.get('#edit-query-detail-description');
  }

  getEditQueryDetailButton(){
      return cy.get('#edit-query-detail-button');
  }

  getEditQueryDetailCancelButton(){
    return cy.get('#edit-query-detail-cancel-button');
  }

  getRadioOptionSelected(){
      return cy.get('[type="radio"]').first().check();
  }

  getEditSaveChangesButton(){
      return cy.get('#edit-save-changes-button');
  }

  getEditSaveChangesCancelButton(){
      return cy.get('#edit-save-changes-cancel-button');
  }

  getEditSaveChangesFormName(){
      return cy.get('#save-changes-query-name');
  }

  getDiscardChangesIcon(){
      return cy.get('svg[data-icon="undo"]')
  }

  getDiscardYesButton(){
     return cy.get('#discard-yes-button');
  }

  getDiscardNoButton(){
     return cy.get('#discard-no-button');
  }

  getCloseIcon() {
    return cy.get('svg[data-icon="close"]');
  }

  getManageQueryCloseIcon(){
      return cy.get('.manage-modal-close-icon');
  }

    //temp query icon
  getManageQueriesIcon(){
    return cy.get('[data-testid=manage-queries-modal-icon]');
  }

  getManageQueriesModalOpened(){
    cy.get('.fa-cog').click();
    cy.get('.ant-dropdown-menu-item').click();
  }

  //saved query dropdown
  getSelectedQuery(){
    return cy.get('[data-cy=drop-down-list] .ant-select-selection-selected-value').invoke('text');
  }

  getErrorMessage() {
    return cy.get('.ant-form-explain');
  }

  selectQuery(query: string) {
    cy.get('#dropdownList').click();
    return cy.get('[data-cy=query-option]').each(function (item) {
      if (item.text() === query) {
        return item.click();
      }
    });
  }

  getSelectedQueryDescription(){
    return cy.get('#selected-query-description').invoke('text');
  }

  // Switching queries confirmation buttons

  getQueryConfirmationCancelClick(){
    return cy.get('#query-confirmation-cancel-button');
  }

  getQueryConfirmationNoClick(){
    return cy.get('#query-confirmation-no-button');
  }

  getQueryConfirmationYesClick(){
    return cy.get('#query-confirmation-yes-button');
  }

  // Switching entities confirmation buttons

  getEntityConfirmationCancelClick(){
    return cy.get('#entity-confirmation-cancel-button');
  }

  getEntityConfirmationNoClick(){
    return cy.get('#entity-confirmation-no-button');
  }

  getEntityConfirmationYesClick(){
    return cy.get('#entity-confirmation-yes-button');
  }


  // Zero state Explorer
  getExploreButton() {
    return cy.get('[data-cy=explore]');
}

}

const browsePage = new BrowsePage();
export default browsePage;