const axios = require('axios').default

class Termii {
  /**
   * Termii Request Client.
   * @param {string} baseURL 
   * @param {string} apiKey 
   */
  constructor(baseURL, apiKey) {
    this.apiKey = apiKey;
    this.client = axios.create({ baseURL })
  }

  /**
   *  Send SMS to the provided phone no.
   * @param {string} from 
   * @param {string} to 
   * @param {string} body SMS body
   * @param {{
   *  channel: string|undefined, 
   *  type: string|undefined, 
   *  media: {url: string, caption: string} | undefined,
   * }} config
   */
  async sendSms(from, to, body, config = {}) {
    const response = await this.client.post('/api/sms/send', {
      ...config,
      type: config.type || 'plain',
      channel: config.channel || 'generic',
      api_key: this.apiKey,
      sms: body,
      from,
      to,
    })

    return response.data
  }
}

module.exports = Termii
