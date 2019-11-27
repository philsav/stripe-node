declare namespace Stripe {
  /**
   * The Plan object.
   */
  interface Plan {
    /**
     * Whether the plan is currently available for new subscriptions.
     */
    active: boolean;

    /**
     * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for picking the last usage record reported within a period, `last_ever` for picking the last usage record ever (across period bounds) or `max` which picks the usage record with the maximum reported usage during a period. Defaults to `sum`.
     */
    aggregate_usage: 'last_during_period' | 'last_ever' | 'max' | 'sum' | null;

    /**
     * The amount in %s to be charged on the interval specified.
     */
    amount: number | null;

    /**
     * Same as `amount`, but contains a decimal value with at most 12 decimal places.
     */
    amount_decimal: string | null;

    /**
     * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
     */
    billing_scheme: 'per_unit' | 'tiered' | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * One of `day`, `week`, `month` or `year`. The frequency with which a subscription should be billed.
     */
    interval: 'day' | 'month' | 'week' | 'year';

    /**
     * The number of intervals (specified in the `interval` property) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
     */
    interval_count: number;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: {
      [key: string]: string;
    };

    /**
     * A brief description of the plan, hidden from customers.
     */
    nickname: string | null;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'plan';

    /**
     * The product whose pricing this plan determines.
     */
    product: string | Product | null;

    /**
     * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
     */
    tiers:
      | Array<{
        /**
         * Price for the entire tier.
         */
        flat_amount?: number | null;

        /**
         * Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
         */
        flat_amount_decimal?: string | null;

        /**
         * Per unit price for units relevant to the tier.
         */
        unit_amount?: number | null;

        /**
         * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
         */
        unit_amount_decimal?: string | null;

        /**
         * Up to and including to this quantity will be contained in the tier.
         */
        up_to?: number | null;
      }>
      | null;

    /**
     * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
     */
    tiers_mode: 'graduated' | 'volume' | null;

    /**
     * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
     */
    transform_usage:
      | {
        /**
         * Divide usage by this number.
         */
        divide_by: number;

        /**
         * After division, either round the result `up` or `down`.
         */
        round: 'down' | 'up';
      }
      | null;

    /**
     * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
     */
    trial_period_days: number | null;

    /**
     * Configures how the quantity per period should be determined, can be either `metered` or `licensed`. `licensed` will automatically bill the `quantity` set when adding it to a subscription, `metered` will aggregate the total usage based on usage records. Defaults to `licensed`.
     */
    usage_type: 'licensed' | 'metered';
  }

  interface DeletedPlan {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'plan';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  /**
   * You can create plans using the API, or in the Stripe [Dashboard](https://dashboard.stripe.com/subscriptions/products).
   */
  interface PlanCreateParams {
    /**
     * Whether the plan is currently available for new subscriptions. Defaults to `true`.
     */
    active?: boolean;

    /**
     * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for picking the last usage record reported within a period, `last_ever` for picking the last usage record ever (across period bounds) or `max` which picks the usage record with the maximum reported usage during a period. Defaults to `sum`.
     */
    aggregate_usage?: 'last_during_period' | 'last_ever' | 'max' | 'sum';

    /**
     * A positive integer in %s (or 0 for a free plan) representing how much to charge on a recurring basis.
     */
    amount?: number;

    /**
     * Same as `amount`, but accepts a decimal value with at most 12 decimal places. Only one of `amount` and `amount_decimal` can be set.
     */
    amount_decimal?: string;

    /**
     * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
     */
    billing_scheme?: 'per_unit' | 'tiered';

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * An identifier randomly generated by Stripe. Used to identify this plan when subscribing a customer. You can optionally override this ID, but the ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test modes.
     */
    id?: string;

    /**
     * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
     */
    interval: 'day' | 'month' | 'week' | 'year';

    /**
     * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
     */
    interval_count?: number;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * A brief description of the plan, hidden from customers.
     */
    nickname?: string;

    product?:
      | {
        /**
         * Whether the product is currently available for purchase. Defaults to `true`.
         */
        active?: boolean;

        /**
         * The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.
         */
        id?: string;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: {
          [key: string]: string;
        };

        /**
         * The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
         */
        name: string;

        /**
         * An arbitrary string to be displayed on your customer's credit card statement. This may be up to 22 characters. The statement description may not include <>"' characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
         */
        statement_descriptor?: string;

        /**
         * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
         */
        unit_label?: string;
      }
      | string;

    /**
     * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
     */
    tiers?: Array<{
      /**
       * The flat billing amount for an entire tier, regardless of the number of units in the tier.
       */
      flat_amount?: number;

      /**
       * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
       */
      flat_amount_decimal?: string;

      /**
       * The per unit billing amount for each individual unit for which this tier applies.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: string;

      /**
       * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
       */
      up_to: 'inf' | number;
    }>;

    /**
     * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
     */
    tiers_mode?: 'graduated' | 'volume';

    /**
     * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
     */
    transform_usage?: {
      /**
       * Divide usage by this number.
       */
      divide_by: number;

      /**
       * After division, either round the result `up` or `down`.
       */
      round: 'down' | 'up';
    };

    /**
     * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
     */
    trial_period_days?: number;

    /**
     * Configures how the quantity per period should be determined, can be either `metered` or `licensed`. `licensed` will automatically bill the `quantity` set for a plan when adding it to a subscription, `metered` will aggregate the total usage based on usage records. Defaults to `licensed`.
     */
    usage_type?: 'licensed' | 'metered';
  }

  /**
   * Deleting plans means new subscribers can't be added. Existing subscribers aren't affected.
   */
  interface PlanDeleteParams {}

  /**
   * Returns a list of your plans.
   */
  interface PlanListParams {
    /**
     * Only return plans that are active or inactive (e.g., pass `false` to list all inactive plans).
     */
    active?: boolean;

    /**
     * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
     */
    created?:
      | {
        /**
         * Minimum value to filter by (exclusive)
         */
        gt?: number;

        /**
         * Minimum value to filter by (inclusive)
         */
        gte?: number;

        /**
         * Maximum value to filter by (exclusive)
         */
        lt?: number;

        /**
         * Maximum value to filter by (inclusive)
         */
        lte?: number;
      }
      | number;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * Only return plans for the given product.
     */
    product?: string;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Retrieves the plan with the given ID.
   */
  interface PlanRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan's ID, amount, currency, or billing cycle.
   */
  interface PlanUpdateParams {
    /**
     * Whether the plan is currently available for new subscriptions.
     */
    active?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * A brief description of the plan, hidden from customers.
     */
    nickname?: string;

    /**
     * The product the plan belongs to. Note that after updating, statement descriptors and line items of the plan in active subscriptions will be affected.
     */
    product?: string;

    /**
     * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
     */
    trial_period_days?: number;
  }

  class PlansResource {
    /**
     * You can create plans using the API, or in the Stripe [Dashboard](https://dashboard.stripe.com/subscriptions/products).
     */
    create(params: PlanCreateParams, options?: HeaderOptions): Promise<Plan>;

    /**
     * Deleting plans means new subscribers can't be added. Existing subscribers aren't affected.
     */
    del(
      id: string,
      params?: PlanDeleteParams,
      options?: HeaderOptions
    ): Promise<DeletedPlan>;

    /**
     * Returns a list of your plans.
     */
    list(
      params?: PlanListParams,
      options?: HeaderOptions
    ): Promise<ApiList<Plan>>;

    /**
     * Retrieves the plan with the given ID.
     */
    retrieve(
      id: string,
      params?: PlanRetrieveParams,
      options?: HeaderOptions
    ): Promise<Plan>;

    /**
     * Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan's ID, amount, currency, or billing cycle.
     */
    update(
      id: string,
      params?: PlanUpdateParams,
      options?: HeaderOptions
    ): Promise<Plan>;
  }
}