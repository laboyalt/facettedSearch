import { Component, OnInit } from '@angular/core';
import { Facet, FacetDataType } from 'ng-material2-facet-search';
import { of, } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchText;
  clients: Client[] = [
    {
      "cs_request_id": 48390,
      "request_queue": "PRM",
      "request_category": "New",
      "request_type": "Portfolio",
      "request_status": "Cancelled",
      "request_sub_status": "Cancelled",
      "status_start_date": null,
      "due_date": "6/21/2018",
      "request_owner": null,
      "modified_time": "6/25/2018",
      "created_by": 769496,
      "stakeholder": "OBSMA"
    },
    {
      "cs_request_id": 48391,
      "request_queue": "CSR",
      "request_category": "New",
      "request_type": "Portfolio",
      "request_status": "Cancelled",
      "request_sub_status": null,
      "status_start_date": null,
      "due_date": "6/21/2018",
      "request_owner": null,
      "modified_time": "6/25/2018",
      "created_by": 769496,
      "stakeholder": "OBSMA"
    },
    {
      "cs_request_id": 48392,
      "request_queue": "PRM",
      "request_category": "New",
      "request_type": "Portfolio",
      "request_status": "Cancelled",
      "request_sub_status": "Cancelled",
      "status_start_date": null,
      "due_date": "6/21/2018",
      "request_owner": null,
      "modified_time": "6/25/2018",
      "created_by": 769496,
      "stakeholder": "OBSMA"
    },
    {
      "cs_request_id": 48393,
      "request_queue": "CSR",
      "request_category": "Change",
      "request_type": "Guideline",
      "request_status": "Complete",
      "request_sub_status": null,
      "status_start_date": null,
      "due_date": "4/19/2019",
      "request_owner": null,
      "modified_time": "4/23/2019",
      "created_by": 1569959,
      "stakeholder": "OB"
    },
    {
      "cs_request_id": 48394,
      "request_queue": "PRM",
      "request_category": "Change",
      "request_type": "Guideline",
      "request_status": "Complete",
      "request_sub_status": "Completed",
      "status_start_date": null,
      "due_date": "4/19/2019",
      "request_owner": 1788915,
      "modified_time": "4/23/2019",
      "created_by": 2853569,
      "stakeholder": "OB"
    },
    {
      "cs_request_id": 48395,
      "request_queue": "PAM",
      "request_category": "Change",
      "request_type": "Guideline",
      "request_status": "Complete",
      "request_sub_status": "Completed",
      "status_start_date": null,
      "due_date": "12/31/2019",
      "request_owner": 2570340,
      "modified_time": "2/13/2019",
      "created_by": 2192737,
      "stakeholder": "contracting"
    },
    {
      "cs_request_id": 48396,
      "request_queue": "DRM",
      "request_category": "Change",
      "request_type": "Guideline",
      "request_status": "Complete",
      "request_sub_status": "Completed",
      "status_start_date": null,
      "due_date": "1/31/2019",
      "request_owner": 2570340,
      "modified_time": "2/13/2019",
      "created_by": 2192737,
      "stakeholder": "contracting"
    },
    {
      "cs_request_id": 48397,
      "request_queue": "DAM",
      "request_category": "Change",
      "request_type": "Guideline",
      "request_status": "Complete",
      "request_sub_status": "Completed",
      "status_start_date": null,
      "due_date": "6/8/2018",
      "request_owner": null,
      "modified_time": "6/4/2018",
      "created_by": 2192737,
      "stakeholder": "contracting"
    },
    {
      "cs_request_id": 48398,
      "request_queue": "PAM",
      "request_category": "Change",
      "request_type": "Guideline",
      "request_status": "Complete",
      "request_sub_status": "Ignored",
      "status_start_date": null,
      "due_date": "3/8/2019",
      "request_owner": 2591514,
      "modified_time": "2/26/2019",
      "created_by": 2853569,
      "stakeholder": "legal"
    }
  ];
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

  constructor() {

  }

  ngOnInit(): void {

  }

  // you can use an event method like this to trigger your filtering logic.
  filterUpdated = (facetFilters: Array<Facet>): void => {
    this.selectedFacets = facetFilters;
    console.log('filter', facetFilters);
  }
}
