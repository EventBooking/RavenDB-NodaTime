Noda Time support for RavenDB  [![NuGet Version](https://img.shields.io/nuget/v/RavenDB.Client.NodaTime.svg?style=flat)](https://www.nuget.org/packages/RavenDB.Client.NodaTime/) 
=============================

This is a custom extension for RavenDB.  

It allows you to use data types from [Noda Time](http://www.nodatime.org), such as `Instant`, `LocalDateTime`, and others.
Specifically, it enables you to use these types directly in your domain entities, which get serialized into RavenDB documents.

[Full documentation is available here](https://github.com/mj1856/RavenDB-NodaTime/wiki).

# This Branch

The `elite-publish` branch contains files to allow the Elite team to publish this package to our private NuGet feed. All code changes should be made in _another_ branch and then pulled into this one. The changes in this branch should _NOT_ be pulled back into the other branches.
