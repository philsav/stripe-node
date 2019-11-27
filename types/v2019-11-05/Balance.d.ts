declare namespace Stripe {
  /**
   * The Balance object.
   */
  interface Balance {
    /**
     * Funds that are available to be transferred or paid out, whether automatically by Stripe or explicitly via the [Transfers API](#transfers) or [Payouts API](#payouts). The available balance for each currency and payment type can be found in the `source_types` property.
     */
    available?: Array<{
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: {
        /**
         * Amount for bank account.
         */
        bank_account?: number;

        /**
         * Amount for card.
         */
        card?: number;
      };
    }>;

    /**
     * Funds held due to negative balances on connected Custom accounts. The connect reserve balance for each currency and payment type can be found in the `source_types` property.
     */
    connect_reserved?: Array<{
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: {
        /**
         * Amount for bank account.
         */
        bank_account?: number;

        /**
         * Amount for card.
         */
        card?: number;
      };
    }>;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'balance';

    /**
     * Funds that are not yet available in the balance, due to the 7-day rolling pay cycle. The pending balance for each currency, and for each payment type, can be found in the `source_types` property.
     */
    pending?: Array<{
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: {
        /**
         * Amount for bank account.
         */
        bank_account?: number;

        /**
         * Amount for card.
         */
        card?: number;
      };
    }>;
  }

  /**
   * Retrieves the current account balance, based on the authentication that was used to make the request.
   *  For a sample request, see [Accounting for negative balances](https://stripe.com/docs/connect/account-balances#accounting-for-negative-balances).
   */
  interface BalanceRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class BalanceResource {
    /**
     * Retrieves the current account balance, based on the authentication that was used to make the request.
     *  For a sample request, see [Accounting for negative balances](https://stripe.com/docs/connect/account-balances#accounting-for-negative-balances).
     */
    retrieve(
      params?: BalanceRetrieveParams,
      options?: HeaderOptions
    ): Promise<Balance>;
  }
}