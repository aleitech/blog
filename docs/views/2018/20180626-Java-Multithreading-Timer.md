---
title:  "Java多线程-使用Timer和CountDownLatch"
date:  2018-06-26 06:43:45
categories:
  - 编程语言
tags:
  - Java
  - Multithreading
---

> 被请求方单次执行时间较长，请求方使用多线程加速处理批量请求;被请求方对于请求频率有严格限制，超出阈值连接超时

## 场景

* 被请求方提供远程API
* 一次请求，响应时间需要几秒钟，速度慢而且不稳定
* API要求，每分钟最多接收请求100次，否则拒绝响应
* 请求方需要处理10万次以上的请求
* 请求方太慢或者请求频率不符合接口要求，都无法完成任务

## 方案

* 请求方使用多线程，同时提交请求，否则单线程每分钟才发出10来次请求，太慢
* 使用Timer控制每个线程的执行频率
* 使用全局变量来存放10万次请求的参数
* 使用全局变量来存放10万次请求的返回值

## 代码

* demo，根据11万个酒店id，请求11万个酒店信息
```java
  import java.util.ArrayList;
  import java.util.Calendar;
  import java.util.Timer;
  import java.util.TimerTask;
  import java.util.concurrent.CountDownLatch;
  
  public class TestTimer {
  
      // 计数器，如果不为0，就阻塞主线程，直到子线程将计数降为0
      CountDownLatch latch;
  
      // list, 存储11万个酒店信息
      private ArrayList<String> hotelInfoList = new ArrayList<>();
  
      // list，存储11万个id
      private ArrayList<Integer> hotelIds = new ArrayList<>();
  
      public TestTimer(int count) {
          latch = new CountDownLatch(count);
      }
      {
          for (int i = 0; i < 110000; i++) {
              hotelIds.add(i);
          }
      }
  
      // 取酒店id
      synchronized Integer getHotelId() {
          Integer hotelId;
          if (hotelIds.size() > 0) {
              hotelId = hotelIds.get(0);
              hotelIds.remove(0);
          } else {
              hotelId = null;
          }
          return hotelId;
      }
  
      // 存酒店信息
      synchronized String addHotelInfoList(int hotelId) {
          String hotelInfo = "酒店id是" + hotelId;
          hotelInfoList.add(hotelInfo);
          return hotelInfo;
      }
  
      public static void main(String[] args) {
          // 起10个线程，每个线程没6秒请求一次
          TestTimer demo = new TestTimer(110000);
          for (int i = 0; i < 10; i++) {
              RequestTask task = demo.new RequestTask(i);
              Timer timer = new Timer();
              timer.schedule(task, Math.round(100), 6000);
          }
          try {
              demo.latch.await();
          }
          catch (InterruptedException e) {
              e.printStackTrace();
          }
          System.out.println( "===主线程结束，当前时间是" + Calendar.getInstance().getTimeInMillis());
          // 存数据到数据库
          // TODO
      }
  
      class RequestTask extends TimerTask {
          private int id;
  
          public RequestTask(int id) {
              this.id = id;
          }
  
          @Override
          public void run() {
                  Integer hotelId = getHotelId();
                  if (hotelId != null) {
                      System.out.println("线程" + id + ":  正在 执行。" 
                        + "增加酒店信息：" + addHotelInfoList(hotelId) 
                        + "。当前时间是" + Calendar.getInstance().getTimeInMillis());
                      latch.countDown();
                  } else {
                      this.cancel();
                  }
          }
      }
  }
```
