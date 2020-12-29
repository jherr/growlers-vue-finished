# Micro-FEs Simplified for Vue finished code

This example repo has three applications the work together to use Vue Micro-FEs in both another Vue host application as well as in a vanilla host application.

# Installation

```sh
% cd growlers && yarn
% cd vanilla-host && yarn
% cd vue-host && yarn
```

# Running the demo

In different terminals:

```sh
% cd growlers && yarn start
% cd vanilla-host && yarn start
% cd vue-host && yarn start
```

# Checking out the demo

The Micro-FEs are hosted on [http://localhost:8080](http://localhost:8080).

They are used by a Vue based client application on [http://localhost:8081](http://localhost:8081).

They are used by a vanilla client application on [http://localhost:8082](http://localhost:8082).

# What this demonstrates

* How easy it is to share Vue Micro-FEs using Module Federation
* Using `reactive` to share data between Micro-FEs mounted in disparate parts of the DOM tree
* Subscribing to the stores used by the Micro-FEs in the Vue host applicaton
* Vanilla wrappers for the Vue Micro-FE components hosted on a vanilla page
* The vanilla page subscribing to the Micro-FE store and showing updates as the state changes
