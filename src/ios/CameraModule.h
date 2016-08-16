#import <Cordova/CDVPlugin.h>
#import <objc/runtime.h>

@interface CameraModule : CDVPlugin  

-(void)start:(CDVInvokedUrlCommand*)command ;
-(void)stop:(CDVInvokedUrlCommand*)command;

@end

