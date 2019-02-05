import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xa525C3ABFeeb09F6b33d3A10c8E103f6D1C5534D'
);

export default instance;