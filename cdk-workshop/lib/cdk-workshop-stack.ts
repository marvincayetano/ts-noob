import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda Resource
    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_14_X, // Execution Environment - Basically what runs the code
      code: lambda.Code.fromAsset("lambda"), // Code inside the lambda folder
      handler: "hello.handler", // Name of the file function inside the lambda folder file
    });

    // API Gateway REST API for our hello
    new apigw.LambdaRestApi(this, "Endpoint", {
      handler: hello,
    });
  }
}
