'use strict'

const Env = use('Env')

module.exports = {
  /*
   |--------------------------------------------------------------------------
   | Termii API Key
   |--------------------------------------------------------------------------
   */
  apiKey: Env.get('TERMII_API_KEY', ''),

  /*
   |--------------------------------------------------------------------------
   | Termii Base URL
   |--------------------------------------------------------------------------
   */
  baseUrl: Env.get('TERMII_BASE_URL', 'https://termii.com'),


  /*
   |--------------------------------------------------------------------------
   | Termii Sender Id (Default)
   |--------------------------------------------------------------------------
   */
  defaultSenderId: Env.get('TERMII_SENDER_ID', 'N-Alert'),
}
