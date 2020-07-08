---
title:  "lambda替换匿名内部类Runnable"
date:  2018-07-07 06:27:25
categories:
  - 编程语言
tags:
  - Java
---

## 说明

* Java是面向对象的语言，不是函数语言
* Java变量只能是基本类型和引用类型，不能是方法（一段要执行的代码）
* 所以Java在使用回调函数时特别的啰嗦，要把回调函数封装成类的一个方法，将类的实例传给调用方
* 因为仅仅需要执行回调函数，并不关心类的其他要素，通常我们使用匿名内部类去封装唯一的方法
* 这种回调设计，叫做回调模式，可以说，这是因为Java不支持方法作为参数而被逼出来的设计模式
* Javascript可以把一段代码作为变量传递给调用方，所以在写参数时，直接写函数
* 随着函数式编程的流行，lambda表达式的使用越来越广泛
* lambda表达式是一个匿名函数，命名来自于数学上的λ演算（λ发音lambda），这种演算可以用来清晰地定义什么是一个可计算函数
* JDK 1.8开始支持lambda表达式

## 匿名内部类

```Java
    void read() throws Exception {
        URI uri = this.getClass().getResource("h.txt").toURI();
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
```

## Lambda

```Java
    void read() throws Exception {
        URI uri = this.getClass().getResource("h.txt").toURI();
        ExecutorService executor = Executors.newCachedThreadPool();
        Future f = executor.submit(
                () -> {
                    try {
                        byte[] bytes = Files.readAllBytes(Paths.get(uri));
                        String content = new String(bytes);
                        System.out.println(content);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
        );
    }
```    
