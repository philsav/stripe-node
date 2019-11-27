declare namespace Stripe {
  /**
   * The WebhookEndpoint object.
   */
  interface WebhookEndpoint {
    /**
     * The API version events are rendered as for this webhook endpoint.
     */
    api_version: string | null;

    /**
     * The ID of the associated Connect application.
     */
    application: string | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * The list of events to enable for this endpoint. `['*']` indicates that all events are enabled, except those that require explicit selection.
     */
    enabled_events: Array<string>;

    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'webhook_endpoint';

    /**
     * The endpoint's secret, used to generate [webhook signatures](https://stripe.com/docs/webhooks/signatures). Only returned at creation.
     */
    secret: string;

    /**
     * The status of the webhook. It can be `enabled` or `disabled`.
     */
    status: string;

    /**
     * The URL of the webhook endpoint.
     */
    url: string;
  }

  interface DeletedWebhookEndpoint {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'webhook_endpoint';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  /**
   * A webhook endpoint must have a url and a list of enabled_events. You may optionally specify the Boolean connect parameter. If set to true, then a Connect webhook endpoint that notifies the specified url about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified url only about events from your account is created. You can also create webhook endpoints in the [webhooks settings](https://dashboard.stripe.com/account/webhooks) section of the Dashboard.
   */
  interface WebhookEndpointCreateParams {
    /**
     * Events sent to this endpoint will be generated with this Stripe Version instead of your account's default Stripe Version.
     */
    api_version?:
      | '2011-01-01'
      | '2011-06-21'
      | '2011-06-28'
      | '2011-08-01'
      | '2011-09-15'
      | '2011-11-17'
      | '2012-02-23'
      | '2012-03-25'
      | '2012-06-18'
      | '2012-06-28'
      | '2012-07-09'
      | '2012-09-24'
      | '2012-10-26'
      | '2012-11-07'
      | '2013-02-11'
      | '2013-02-13'
      | '2013-07-05'
      | '2013-08-12'
      | '2013-08-13'
      | '2013-10-29'
      | '2013-12-03'
      | '2014-01-31'
      | '2014-03-13'
      | '2014-03-28'
      | '2014-05-19'
      | '2014-06-13'
      | '2014-06-17'
      | '2014-07-22'
      | '2014-07-26'
      | '2014-08-04'
      | '2014-08-20'
      | '2014-09-08'
      | '2014-10-07'
      | '2014-11-05'
      | '2014-11-20'
      | '2014-12-08'
      | '2014-12-17'
      | '2014-12-22'
      | '2015-01-11'
      | '2015-01-26'
      | '2015-02-10'
      | '2015-02-16'
      | '2015-02-18'
      | '2015-03-24'
      | '2015-04-07'
      | '2015-06-15'
      | '2015-07-07'
      | '2015-07-13'
      | '2015-07-28'
      | '2015-08-07'
      | '2015-08-19'
      | '2015-09-03'
      | '2015-09-08'
      | '2015-09-23'
      | '2015-10-01'
      | '2015-10-12'
      | '2015-10-16'
      | '2016-02-03'
      | '2016-02-19'
      | '2016-02-22'
      | '2016-02-23'
      | '2016-02-29'
      | '2016-03-07'
      | '2016-06-15'
      | '2016-07-06'
      | '2016-10-19'
      | '2017-01-27'
      | '2017-02-14'
      | '2017-04-06'
      | '2017-05-25'
      | '2017-06-05'
      | '2017-08-15'
      | '2017-12-14'
      | '2018-01-23'
      | '2018-02-05'
      | '2018-02-06'
      | '2018-02-28'
      | '2018-05-21'
      | '2018-07-27'
      | '2018-08-23'
      | '2018-09-06'
      | '2018-09-24'
      | '2018-10-31'
      | '2018-11-08'
      | '2019-02-11'
      | '2019-02-19'
      | '2019-03-14'
      | '2019-05-16'
      | '2019-08-14'
      | '2019-09-09'
      | '2019-10-08'
      | '2019-10-17'
      | '2019-11-05';

    /**
     * Whether this endpoint should receive events from connected accounts (`true`), or from your account (`false`). Defaults to `false`.
     */
    connect?: boolean;

    /**
     * The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.
     */
    enabled_events: Array<
      | '*'
      | 'account.application.authorized'
      | 'account.application.deauthorized'
      | 'account.external_account.created'
      | 'account.external_account.deleted'
      | 'account.external_account.updated'
      | 'account.updated'
      | 'application_fee.created'
      | 'application_fee.refund.updated'
      | 'application_fee.refunded'
      | 'balance.available'
      | 'capability.updated'
      | 'charge.captured'
      | 'charge.dispute.closed'
      | 'charge.dispute.created'
      | 'charge.dispute.funds_reinstated'
      | 'charge.dispute.funds_withdrawn'
      | 'charge.dispute.updated'
      | 'charge.expired'
      | 'charge.failed'
      | 'charge.pending'
      | 'charge.refund.updated'
      | 'charge.refunded'
      | 'charge.succeeded'
      | 'charge.updated'
      | 'checkout.session.completed'
      | 'coupon.created'
      | 'coupon.deleted'
      | 'coupon.updated'
      | 'credit_note.created'
      | 'credit_note.updated'
      | 'credit_note.voided'
      | 'customer.created'
      | 'customer.deleted'
      | 'customer.discount.created'
      | 'customer.discount.deleted'
      | 'customer.discount.updated'
      | 'customer.source.created'
      | 'customer.source.deleted'
      | 'customer.source.expiring'
      | 'customer.source.updated'
      | 'customer.subscription.created'
      | 'customer.subscription.deleted'
      | 'customer.subscription.trial_will_end'
      | 'customer.subscription.updated'
      | 'customer.tax_id.created'
      | 'customer.tax_id.deleted'
      | 'customer.tax_id.updated'
      | 'customer.updated'
      | 'file.created'
      | 'invoice.created'
      | 'invoice.deleted'
      | 'invoice.finalized'
      | 'invoice.marked_uncollectible'
      | 'invoice.payment_action_required'
      | 'invoice.payment_failed'
      | 'invoice.payment_succeeded'
      | 'invoice.sent'
      | 'invoice.upcoming'
      | 'invoice.updated'
      | 'invoice.voided'
      | 'invoiceitem.created'
      | 'invoiceitem.deleted'
      | 'invoiceitem.updated'
      | 'issuing_authorization.created'
      | 'issuing_authorization.request'
      | 'issuing_authorization.updated'
      | 'issuing_card.created'
      | 'issuing_card.updated'
      | 'issuing_cardholder.created'
      | 'issuing_cardholder.updated'
      | 'issuing_dispute.created'
      | 'issuing_dispute.updated'
      | 'issuing_settlement.created'
      | 'issuing_settlement.updated'
      | 'issuing_transaction.created'
      | 'issuing_transaction.updated'
      | 'mandate.updated'
      | 'order.created'
      | 'order.payment_failed'
      | 'order.payment_succeeded'
      | 'order.updated'
      | 'order_return.created'
      | 'payment_intent.amount_capturable_updated'
      | 'payment_intent.canceled'
      | 'payment_intent.created'
      | 'payment_intent.payment_failed'
      | 'payment_intent.succeeded'
      | 'payment_method.attached'
      | 'payment_method.card_automatically_updated'
      | 'payment_method.detached'
      | 'payment_method.updated'
      | 'payout.canceled'
      | 'payout.created'
      | 'payout.failed'
      | 'payout.paid'
      | 'payout.updated'
      | 'person.created'
      | 'person.deleted'
      | 'person.updated'
      | 'plan.created'
      | 'plan.deleted'
      | 'plan.updated'
      | 'product.created'
      | 'product.deleted'
      | 'product.updated'
      | 'radar.early_fraud_warning.created'
      | 'radar.early_fraud_warning.updated'
      | 'recipient.created'
      | 'recipient.deleted'
      | 'recipient.updated'
      | 'reporting.report_run.failed'
      | 'reporting.report_run.succeeded'
      | 'reporting.report_type.updated'
      | 'review.closed'
      | 'review.opened'
      | 'setup_intent.canceled'
      | 'setup_intent.created'
      | 'setup_intent.setup_failed'
      | 'setup_intent.succeeded'
      | 'sigma.scheduled_query_run.created'
      | 'sku.created'
      | 'sku.deleted'
      | 'sku.updated'
      | 'source.canceled'
      | 'source.chargeable'
      | 'source.failed'
      | 'source.mandate_notification'
      | 'source.refund_attributes_required'
      | 'source.transaction.created'
      | 'source.transaction.updated'
      | 'subscription_schedule.aborted'
      | 'subscription_schedule.canceled'
      | 'subscription_schedule.completed'
      | 'subscription_schedule.created'
      | 'subscription_schedule.expiring'
      | 'subscription_schedule.released'
      | 'subscription_schedule.updated'
      | 'tax_rate.created'
      | 'tax_rate.updated'
      | 'topup.canceled'
      | 'topup.created'
      | 'topup.failed'
      | 'topup.reversed'
      | 'topup.succeeded'
      | 'transfer.created'
      | 'transfer.failed'
      | 'transfer.paid'
      | 'transfer.reversed'
      | 'transfer.updated'>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The URL of the webhook endpoint.
     */
    url: string;
  }

  /**
   * You can also delete webhook endpoints via the [webhook endpoint management](https://dashboard.stripe.com/account/webhooks) page of the Stripe dashboard.
   */
  interface WebhookEndpointDeleteParams {}

  /**
   * Returns a list of your webhook endpoints.
   */
  interface WebhookEndpointListParams {
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
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Retrieves the webhook endpoint with the given ID.
   */
  interface WebhookEndpointRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the webhook endpoint. You may edit the url, the list of enabled_events, and the status of your endpoint.
   */
  interface WebhookEndpointUpdateParams {
    /**
     * Disable the webhook endpoint if set to true.
     */
    disabled?: boolean;

    /**
     * The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.
     */
    enabled_events?: Array<
      | '*'
      | 'account.application.authorized'
      | 'account.application.deauthorized'
      | 'account.external_account.created'
      | 'account.external_account.deleted'
      | 'account.external_account.updated'
      | 'account.updated'
      | 'application_fee.created'
      | 'application_fee.refund.updated'
      | 'application_fee.refunded'
      | 'balance.available'
      | 'capability.updated'
      | 'charge.captured'
      | 'charge.dispute.closed'
      | 'charge.dispute.created'
      | 'charge.dispute.funds_reinstated'
      | 'charge.dispute.funds_withdrawn'
      | 'charge.dispute.updated'
      | 'charge.expired'
      | 'charge.failed'
      | 'charge.pending'
      | 'charge.refund.updated'
      | 'charge.refunded'
      | 'charge.succeeded'
      | 'charge.updated'
      | 'checkout.session.completed'
      | 'coupon.created'
      | 'coupon.deleted'
      | 'coupon.updated'
      | 'credit_note.created'
      | 'credit_note.updated'
      | 'credit_note.voided'
      | 'customer.created'
      | 'customer.deleted'
      | 'customer.discount.created'
      | 'customer.discount.deleted'
      | 'customer.discount.updated'
      | 'customer.source.created'
      | 'customer.source.deleted'
      | 'customer.source.expiring'
      | 'customer.source.updated'
      | 'customer.subscription.created'
      | 'customer.subscription.deleted'
      | 'customer.subscription.trial_will_end'
      | 'customer.subscription.updated'
      | 'customer.tax_id.created'
      | 'customer.tax_id.deleted'
      | 'customer.tax_id.updated'
      | 'customer.updated'
      | 'file.created'
      | 'invoice.created'
      | 'invoice.deleted'
      | 'invoice.finalized'
      | 'invoice.marked_uncollectible'
      | 'invoice.payment_action_required'
      | 'invoice.payment_failed'
      | 'invoice.payment_succeeded'
      | 'invoice.sent'
      | 'invoice.upcoming'
      | 'invoice.updated'
      | 'invoice.voided'
      | 'invoiceitem.created'
      | 'invoiceitem.deleted'
      | 'invoiceitem.updated'
      | 'issuing_authorization.created'
      | 'issuing_authorization.request'
      | 'issuing_authorization.updated'
      | 'issuing_card.created'
      | 'issuing_card.updated'
      | 'issuing_cardholder.created'
      | 'issuing_cardholder.updated'
      | 'issuing_dispute.created'
      | 'issuing_dispute.updated'
      | 'issuing_settlement.created'
      | 'issuing_settlement.updated'
      | 'issuing_transaction.created'
      | 'issuing_transaction.updated'
      | 'mandate.updated'
      | 'order.created'
      | 'order.payment_failed'
      | 'order.payment_succeeded'
      | 'order.updated'
      | 'order_return.created'
      | 'payment_intent.amount_capturable_updated'
      | 'payment_intent.canceled'
      | 'payment_intent.created'
      | 'payment_intent.payment_failed'
      | 'payment_intent.succeeded'
      | 'payment_method.attached'
      | 'payment_method.card_automatically_updated'
      | 'payment_method.detached'
      | 'payment_method.updated'
      | 'payout.canceled'
      | 'payout.created'
      | 'payout.failed'
      | 'payout.paid'
      | 'payout.updated'
      | 'person.created'
      | 'person.deleted'
      | 'person.updated'
      | 'plan.created'
      | 'plan.deleted'
      | 'plan.updated'
      | 'product.created'
      | 'product.deleted'
      | 'product.updated'
      | 'radar.early_fraud_warning.created'
      | 'radar.early_fraud_warning.updated'
      | 'recipient.created'
      | 'recipient.deleted'
      | 'recipient.updated'
      | 'reporting.report_run.failed'
      | 'reporting.report_run.succeeded'
      | 'reporting.report_type.updated'
      | 'review.closed'
      | 'review.opened'
      | 'setup_intent.canceled'
      | 'setup_intent.created'
      | 'setup_intent.setup_failed'
      | 'setup_intent.succeeded'
      | 'sigma.scheduled_query_run.created'
      | 'sku.created'
      | 'sku.deleted'
      | 'sku.updated'
      | 'source.canceled'
      | 'source.chargeable'
      | 'source.failed'
      | 'source.mandate_notification'
      | 'source.refund_attributes_required'
      | 'source.transaction.created'
      | 'source.transaction.updated'
      | 'subscription_schedule.aborted'
      | 'subscription_schedule.canceled'
      | 'subscription_schedule.completed'
      | 'subscription_schedule.created'
      | 'subscription_schedule.expiring'
      | 'subscription_schedule.released'
      | 'subscription_schedule.updated'
      | 'tax_rate.created'
      | 'tax_rate.updated'
      | 'topup.canceled'
      | 'topup.created'
      | 'topup.failed'
      | 'topup.reversed'
      | 'topup.succeeded'
      | 'transfer.created'
      | 'transfer.failed'
      | 'transfer.paid'
      | 'transfer.reversed'
      | 'transfer.updated'>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The URL of the webhook endpoint.
     */
    url?: string;
  }

  class WebhookEndpointsResource {
    /**
     * A webhook endpoint must have a url and a list of enabled_events. You may optionally specify the Boolean connect parameter. If set to true, then a Connect webhook endpoint that notifies the specified url about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified url only about events from your account is created. You can also create webhook endpoints in the [webhooks settings](https://dashboard.stripe.com/account/webhooks) section of the Dashboard.
     */
    create(
      params: WebhookEndpointCreateParams,
      options?: HeaderOptions
    ): Promise<WebhookEndpoint>;

    /**
     * You can also delete webhook endpoints via the [webhook endpoint management](https://dashboard.stripe.com/account/webhooks) page of the Stripe dashboard.
     */
    del(
      id: string,
      params?: WebhookEndpointDeleteParams,
      options?: HeaderOptions
    ): Promise<DeletedWebhookEndpoint>;

    /**
     * Returns a list of your webhook endpoints.
     */
    list(
      params?: WebhookEndpointListParams,
      options?: HeaderOptions
    ): Promise<ApiList<WebhookEndpoint>>;

    /**
     * Retrieves the webhook endpoint with the given ID.
     */
    retrieve(
      id: string,
      params?: WebhookEndpointRetrieveParams,
      options?: HeaderOptions
    ): Promise<WebhookEndpoint>;

    /**
     * Updates the webhook endpoint. You may edit the url, the list of enabled_events, and the status of your endpoint.
     */
    update(
      id: string,
      params?: WebhookEndpointUpdateParams,
      options?: HeaderOptions
    ): Promise<WebhookEndpoint>;
  }
}