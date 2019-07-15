export interface Client{
  	cs_request_id: number,
		request_queue: string,
		request_category: string,
		request_type: string,
		request_status: string,
		request_sub_status: string,
		status_start_date: string,
		due_date: string,
		request_owner: number,
		modified_time: string,
		created_by: number,
		stakeholder: string
}