---
title:  "Java asychronous execution"
date:   2018-01-09 20:22:16
categories: 
  - 编程语言
tags:
  - Java
---

> 网络请求，响应很慢，采用异步调用，避免阻塞

## ExecutorService

* 举例：企业系统调用银行付款接口
```java
// 调用银行付款接口，响应较慢，采用异步
ExecutorService executor = Executors.newCachedThreadPool();
Future<String> future = executor.submit(new Callable<String>() {
    public String call() throws Exception {
        return PayUtils.pay(account, cash); //account 银行账号，cash 金额
    }
});
try {
    String rs = future.get();   //银行接口响应，付款是否成功
    if("ok".equals(rs)){
      log("payment success");
        
    } else {
      log("payment failure");
    }
} catch (InterruptedException e) {
    e.printStackTrace();
} catch (ExecutionException e) {
    e.printStackTrace();
}
```

* ExecutorService的五个方法
```java
execute(Runnable)   //无返回
submit(Runnable)    //future.get()，仅正常执行结束后返回null
submit(Callable)    //future.get()，得到返回值
invokeAny(...)      //调用一组Callable，返回任意一个Callable的结果
invokeAll(...)      //调用一组Callable，返回所有Callable的结果
```
