import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { ClientsService } from '../clients/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
})

export class ListClientsComponent implements OnInit {
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
  constructor() {
  }

  ngOnInit() {
  }
}