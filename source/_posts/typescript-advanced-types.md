---
title: TypeScript 高级类型技巧
date: 2024-03-08 09:00:00
categories: [技术, 前端开发]
tags: [TypeScript, JavaScript, 类型系统]
thumbnail: https://picsum.photos/800/400?random=3
description: 深入探索 TypeScript 高级类型，包括泛型、条件类型、映射类型等
---

TypeScript 的类型系统是其最强大的特性之一。本文将带你探索一些高级类型技巧。

## 泛型约束

限制泛型必须包含某些属性：

```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength('hello');     // OK
logLength([1, 2, 3]);   // OK
logLength({ length: 5 }); // OK
```

## 条件类型

根据条件选择类型：

```typescript
type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<string[]>;  // true
type B = IsArray<number>;    // false

// 提取数组元素类型
type ElementOf<T> = T extends (infer E)[] ? E : never;

type C = ElementOf<string[]>;  // string
```

## 映射类型

批量转换类型：

```typescript
// 所有属性变为只读
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 所有属性变为可选
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// 提取字符串键
type KeysOfType<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
```

## 模板字面量类型

在类型中使用模板字符串：

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;

type ClickEvent = EventName<'click'>;  // 'onClick'
type ChangeEvent = EventName<'change'>; // 'onChange'

// 组合多个类型
type CSSUnit = 'px' | 'em' | 'rem' | '%';
type CSSProperty<T extends string> = `${T}:${number}${CSSUnit}`;

const margin: CSSProperty<'margin'> = 'margin:10px';
```

## 递归类型

处理嵌套结构：

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object 
    ? DeepReadonly<T[P]> 
    : T[P];
};

type Nested = {
  a: {
    b: {
      c: number;
    };
  };
};

type Result = DeepReadonly<Nested>;
// { readonly a: { readonly b: { readonly c: number } } }
```

## 工具类型实现

手写 TypeScript 内置工具类型：

```typescript
// ReturnType
type MyReturnType<T extends (...args: any) => any> = 
  T extends (...args: any) => infer R ? R : never;

// Parameters
type MyParameters<T extends (...args: any) => any> = 
  T extends (...args: infer P) => any ? P : never;

// NonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T;
```

## 分布式条件类型

条件类型的特殊行为：

```typescript
type ToArray<T> = T extends any ? T[] : never;

type StrArrOrNumArr = ToArray<string | number>;
// 相当于: ToArray<string> | ToArray<number>
// 结果: string[] | number[]

// 使用方括号包裹阻止分发
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type StrAndNumArr = ToArrayNonDist<string | number>;
// 结果: (string | number)[]
```

## 实际应用示例

```typescript
// API 响应类型
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// 提取 data 类型
type DataOf<T> = T extends { data: infer D } ? D : never;

// 使用
type UserResponse = ApiResponse<{ id: number; name: string }>;
type User = DataOf<UserResponse>;  // { id: number; name: string }
```

掌握这些高级类型技巧，让你的 TypeScript 代码更加类型安全！ 💪
