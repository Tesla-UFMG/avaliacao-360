import axios from "axios";

export class AuthService {
  static URL = "http://localhost:8800/api";

  static fetchSystems() {
    let systemsURL = `${this.URL}/system/getSystems`;
    return axios.post(systemsURL);
  }

  static fetchSubsystems(id) {
    let subsystemsURL = `${this.URL}/subsystem/getSubsystemBySystem`;
    return axios.post(subsystemsURL, {
      id: id,
    });
  }
}
