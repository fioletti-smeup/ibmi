'use strict';

import Packet from './packet';
import DataQueueService from '../service/data-queue-service';

export class DataQueueExchangeAttributesRequest extends Packet {

  constructor() {
    super(26);
    this.length = 26;
    this.serviceId = DataQueueService.SERVICE.id;
    this.templateLength = this.length - 20;
    this.clientVersion = 0x00000001;
  }

  get clientVersion() {
    return this.get32Bit(20);
  }

  set clientVersion(val) {
    this.set32Bit(val, 20);
  }

}

export class DataQueueExchangeAttributesResponse extends Packet {

  constructor(dataOrSize) {
    if (!dataOrSize) {
      super(22);
    } else {
      super(dataOrSize);
    }

    if (!dataOrSize) {
      this.length = 22;
      this.serviceId = DataQueueService.SERVICE.id;
      this.requestResponseId = DataQueueExchangeAttributesResponse.ID;
    }
  }

  static get ID() {
    return 0x8000;
  }

}
