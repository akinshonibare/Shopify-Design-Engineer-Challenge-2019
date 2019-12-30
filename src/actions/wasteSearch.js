import axios from "axios";

//extracting data from toronto waste lookup
const lookUp = () => {
  return axios.get(
    "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
  );
};

export { lookUp };
