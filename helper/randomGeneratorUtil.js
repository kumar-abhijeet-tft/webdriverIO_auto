import Chance from "chance";
import uuid from "uuid";

const chance = new Chance();


const randomUtil = {
    getFirstName: () => chance.first(),

    getLastName: () => chance.last(),

    getPhoneNumber: () => chance.phone(),

    getEmail: () => `automation+${uuid()}@gamil.com`,

    getZipCode: () => chance.zip(),

    getStreetAddress: () => chance.zip(),

    getCity: () => chance.city(),

    getState: () => chance.state(),

    getURL: () => chance.url(),

    getBetween: (min, max) => chance.integer({ min,
        max }),

    getString: (options = { length: 5 }) => chance.string(options),

};

export default randomUtil;
