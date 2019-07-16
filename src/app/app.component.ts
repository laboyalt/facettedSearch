import { Component, OnInit } from '@angular/core';
import { Facet, FacetDataType } from 'ng-material2-facet-search';
import { of, } from 'rxjs';
import {Client} from '../app/models/client';
import { ClientsService } from '../app/clients/client.service';
import { delay } from 'rxjs/operators';
import * as jsonData from "./clients.json";


@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchText;
  
  // Facet Definitions
  // You can either define and configure your facets as static object array,
  // or you can generate dynamically based on your data from back end.
  public facets: Array<Facet> = [{
    name: 'type',
    text: 'Type',
    type: FacetDataType.CategorySingle,
    description: 'Please select the request type',
    icon: 'person_outline',
    /* mock http service call  */
    options: of([
      { value: 'portfolio', text: 'Portfolio'},
      { value: 'guideline', text: 'Guideline'},
      { value: 'authAsset', text: 'Auth Asset'},
      { value: 'restPortMerger', text: 'Rest Port Merger'},
      { value: 'investConst', text: 'Invest Const'},
      { value: 'feeStruct', text: 'Fee Structure'},
      { value: 'benchmark', text: 'Benchmark'},
      { value: 'feeBilling', text: 'Fee Billing'},
      { value: 'servProvider', text: 'Service Provider'},
      { value: 'authSigner', text: 'Auth Signer'},
      { value: 'resList', text: 'ResList'},
      { value: 'assignTeam', text: 'Assign Team'},
      { value: 'exception', text: 'Exception'},
      { value: 'other', text: 'Other'},
    ]).pipe(delay(700))
  }, {
    name: 'category',
    text: 'Category',
    type: FacetDataType.CategorySingle,
    description: 'Please select the request category',
    icon: 'category',
    /* mock http service call  */
    options: of([
      { value: 'onboarding', text: 'Onboarding'},
      { value: 'new', text: 'New'},
      { value: 'change', text: 'Change'},
      { value: 'refresh', text: 'Refresh'},
      { value: 'review', text: 'Review'},
      { value: 'terminate', text: 'Terminate'},
    ]).pipe(delay(700))
  }, {
    name: 'status',
    text: 'Status',
    description: 'Please the request status',
    type: FacetDataType.CategorySingle,
    icon: 'star',
    /* mock http service call  */
    options: of([
      { value: 'notStarted', text: 'Not Started'},
      { value: 'inProgress', text: 'In Progress'},
      { value: 'ignored', text: 'Ignored'},
      { value: 'cancelled', text: 'Cancelled'},
      { value: 'completed', text: 'Completed'},
    ]).pipe(delay(700))
  }, {
    name: 'dueDate',
    text: 'Due Date',
    icon: 'date_range',
    description: "Please select the due date of the request",
    type: FacetDataType.Date,
  }, {
    name: 'createdBy',
    text: 'Created By',
    icon: 'event_available',
    description: "Please select the data range of client's creation",
    type: FacetDataType.Date,
  }, {
    name: 'subStatus',
    text: 'Substatus',
    description: 'Please the request SubStatus',
    type: FacetDataType.CategorySingle,
    icon: 'note',
    /* mock http service call  */
    options: of([
      { value: 'implementation', text: 'Implementation'},
      { value: 'actionRequired', text: 'Action Required'},
      { value: 'ignored', text: 'Ignored'},
      { value: 'pending', text: 'Pending Acceptance'},
      { value: 'cancelled', text: 'Cancelled'},
      { value: 'completed', text: 'Completed'},
      { value: 'approved', text: 'Approved'},
      { value: 'clientOutreach', text: 'Client Outreach'},
      { value: 'clientReview', text: 'Client Review'},
      { value: 'peerReview', text: 'Peer Review'},
      { value: 'notStarted', text: 'Not Started'},
      { value: 'null', text: 'Null'},
    ]).pipe(delay(700))
  }, {
    name: 'clientReview',
    text: 'Client Review',
    icon: 'book',
    description: 'This is a test field, you can test boolean data type.',
    type: FacetDataType.Boolean,
  }];

  public selectedFacets: Array<Facet> = []

  // Settings
  public clearButtonEnabled = true;
  public confirmOnRemove = true;

  public client = [];
  constructor(private clientService: ClientsService) {

  }

  ngOnInit() {
    return this.clientService.getClients().subscribe((data: any): void => {this.client = data;});
  }

  // you can use an event method like this to trigger your filtering logic.
  filterUpdated = (facetFilters: Array<Facet>): void => {
    this.selectedFacets = facetFilters;
    console.log('filter', facetFilters);
  }
}
