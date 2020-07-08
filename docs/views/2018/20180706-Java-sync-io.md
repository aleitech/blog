---
title:  "Java同步IO（阻塞式）"
date:  2018-07-06 21:57:15
categories:
  - 编程语言
tags:
  - Java
---

## 说明

* 包是java.io.*
* API始于JDK 1.1
* IO操作时，线程阻塞

## 代码举例

* 需要准备h.txt文件，包含文本内容
* 代码中包含读取文件内容和计算1到100的求和
* 观察打印语句的执行顺序
* 结论是线程是阻塞的，顺序执行
```java
  import java.io.*;
  
  public class SyncIO {
  
      /**
       * 同步，按代码行顺序执行
       */
      void read() throws Exception {
          // 文件对象，对于文件和目录路径名称的抽象
          File file = new File(this.getClass().getResource("/h.txt").getPath());
  
          // 文件输入流对象
          FileInputStream stream = new FileInputStream(file);
  
          // 流对象也可以操作读，增加reader的作用是为了转换，比如字符编码
          InputStreamReader inputStreamReader = new InputStreamReader(stream);
  
          // 对inputStreamReader进行缓冲包装，避免每次read对磁盘读取的调用，先读到缓冲中，再read
          BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
  
          StringBuffer sb = new StringBuffer();
          String currentLine;
          while ((currentLine = bufferedReader.readLine()) != null) {
              sb.append(currentLine+"\n");
          }
          System.out.println(sb);
      }
  
      void sum(){
          int sum = 0;
          for (int i = 0; i < 100 ; i++) {
              sum += i;
          }
          System.out.println(sum);
      }
  
      public static void main(String[] args) throws Exception{
          SyncIO test = new SyncIO();
          test.read();
          test.sum();
      }
  }
```
