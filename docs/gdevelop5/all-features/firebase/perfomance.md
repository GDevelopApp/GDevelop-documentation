---
title: Performance Measuring
---
# Performance Measuring

Firebase includes a tool that will automatically do performance measurements on the players devices. 
That way you can get to know if an update causes a big lag spike you didn't notice on your higher end device. 
To get started, add anywhere the action "Enable performance measuring".

## Custom metrics

The performance measuring toolkit also includes a way to check for the performance of a specific group of events or in a specific time frame using tracers. 
All you need to do is start a tracer when you want to begin recording performance and stop that tracer when you are done. 
You can also record performance for a specific amount of milliseconds.
!!! warning

    The results are not sent to the server until you stop the tracer, so don't forget to stop them once you are done recording.