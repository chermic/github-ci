import * as cdk from '@aws-cdk/core';

export class GithubCiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    console.log(1);
  }
}
