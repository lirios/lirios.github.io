---
layout: post
title: "CMakeShared 1.1.0"
date: 2019-08-02 20:30:00 +0200
author: plfiorini
categories: blog
tags: announcement release cmake-shared
style: blue.css
navitem: nav-blog
---

cmake-shared contains modules and imports for the CMake build system that we use with all the Liri projects.

##### Features

* Add Qt Quick Compiler support
* Support static plugins
* Set COMPILE_OPTIONS instead of deprecated COMPILE_FLAGS
* Always set include directories for modules
* Fix absolute installation paths
* Rename ClangLazy.so to ClazyPlugin.so
* Fix ctest
* Create plugins.qmltypes in the binary directory
* Disable Java-style iterators
* Add missing defines to liri_add_executable
* Install generated private headers

```
$ sha256sum liri-cmake-shared-1.1.0.tar.xz
f549cc4741e20df6f097960eef809c3119ef08b33194efee957b0c44ab9a1b79  liri-cmake-shared-1.1.0.tar.xz
```

You can download the source tarball from [GitHub][tarball]


[tarball]: https://github.com/lirios/cmake-shared/releases/download/v1.1.0/liri-cmake-shared-1.1.0.tar.xz
