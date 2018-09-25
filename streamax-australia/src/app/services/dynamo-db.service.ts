import { Injectable } from '@angular/core';
import * as AWS from "aws-sdk/global";
import * as DynamoDB from "aws-sdk/clients/dynamodb";

@Injectable()
export class DynamoDbService {
  private dynamoDB: DynamoDB;

  constructor() {
    // AWS.config.update({
    //   region: 'ap-southeast-2',
    //   accessKeyId: 'AKIAITOY6FTC5RAQPCGQ',
    //   secretAccessKey: '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'
    // });
    AWS.config.update({
      region: 'ap-southeast-2',
      accessKeyId: 'AKIAJ73HNIZFHVAEEXUQ',
      secretAccessKey: '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'
    });
    this.dynamoDB = new DynamoDB({
      apiVersion: '2012-08-10'
    });
  }

  getDynamoDB() : DynamoDB {
    return this.dynamoDB;
  }

}
