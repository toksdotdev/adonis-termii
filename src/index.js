const axios = require('axios').default

class Termii {
  /**
   * Termii Request Client.
   * @param {string} baseURL 
   * @param {string} apiKey 
   * @param {string} defaultSenderId 
   */
  constructor(baseURL, apiKey, defaultSenderId) {
    this.apiKey = apiKey;
    this.defaultSenderId = defaultSenderId;
    this.client = axios.create({ baseURL });
  }

  /**
   *  Send SMS to the provided phone no.
   * @param {object} config
   * @param {object} config.to
   * @param {string} config.body
   * @param {string|undefined} config.from
   * @param {string|undefined} config.channel
   * @param {string|undefined} config.type
   */
  async sendSms({ from, to, body, channel, type }) {
    const response = await this.client.post('/api/sms/send', {
      ...config,
      to,
      sms: body,
      api_key: this.apiKey,
      type: type || 'plain',
      from: from || this.defaultSenderId,
      channel: channel || 'generic',
    });

    return response.data;
  }
}

module.exports = Termii
