---
title:  "Java异步IO（非阻塞式）"
date:  2018-07-06 22:05:12
categories:
  - 编程语言
tags:
  - Java
---

## 说明

* 包是java.nio.*
* Future始于JDK 1.5
* Files, Paths始于JDK 1.7
* IO操作时，线程非阻塞


## 代码举例

* 需要准备h.txt文件，包含文本内容
* 代码中包含读取文件内容和计算1到100的求和
* 观察打印语句的执行顺序
* 结论是线程异步执行，主线程和子线程非阻塞
* 和nodejs不同，nodejs是单线程，默认实现就是异步IO
* Java利用多线程，实现IO的异步执行
```java
  import java.io.*;
  import java.net.URI;
  import java.nio.file.Files;
  import java.nio.file.Paths;
  import java.util.concurrent.ExecutorService;
  import java.util.concurrent.Executors;
  import java.util.concurrent.Future;
  
  public class AsyncIO {
  
      /**
       * 异步读取
       */
      void read() throws Exception {
          URI uri  = this.getClass().getResource("h.txt").toURI();
          ExecutorService executor = Executors.newCachedThreadPool();
          Future f = executor.submit(new Runnable() {
              @Override
              public void run() {
                  try {
                      byte[] bytes = Files.readAllBytes(Paths.get(uri));
                      String content = new String(bytes);
                      System.out.println(content);
                  } catch (IOException e) {
                      e.printStackTrace();
                  }
              }
          });
      }
  
      void sum(){
          int sum = 0;
          for (int i = 0; i < 100 ; i++) {
              sum += i;
          }
          System.out.println(sum);
      }
  
      public static void main(String[] args) throws Exception{
          AsyncIO test = new AsyncIO();
          test.read();
          test.sum();
      }
  }
```
