import axios from 'axios';

const TICKET_API_BASE_URL = "http://localhost:8081/tickets"

class TicketService{
    getAll() {
        return axios.get(TICKET_API_BASE_URL);
    }

    getById(id){
        return axios.get(TICKET_API_BASE_URL+'/${id}');
    }

    create(data) {
        return axios.post(TICKET_API_BASE_URL+"/createTicket", data);
    }

    update(id, data) {
        return axios.put(TICKET_API_BASE_URL+ '/tutorials/${id}', data);
    }

    delete(id) {
        return axios.delete(TICKET_API_BASE_URL+'/delete/${id}');
    }
}

export default TicketService;