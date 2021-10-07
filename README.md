##Api Versioning

Just recently I came across the question of how to do proper API versioning for RESTful apis.  
There are many ways to do this. In the early days, it was common to version api endpoints with a prefix.
```
v1/some/api
```

However, this turned out to be a bad idea for various reasons. If you serve your api by providing a set of clients,
you have to release a new client on every change. If you don't, you have to somehow communicate to the customer to use the next
version of the api to be able to use new features.

The result is a lot of different endpoints in your code (that mostly do the same) as well as the necessity to either always release new clients or make sure, customers are using the latest v(x).

###A potential solution

There are various ways how to solve this. One of them is to use what I call the "transformer pattern". Basically every api endpoint has its own transformer. All calls first run through a transformer before the result is sent to the customer. (You would have different transformer for incoming data (POST/PUT) or outgoing data (responses), this example only takes care of transforming responses to avoid any unnecessary complexity)

The api consumer either sends the version they are using in the header of the request, or it is being set on the dashboard. Based on this version and the transformer, we know how to transform the response. This pattern not only works for response data, but also for request data.

See the following picture:

<img src="https://github.com/orangecoding/versioning/blob/master/doc/doc.jpeg" width="50%">

The example code in this repository explains the pattern by providing 2 api endpoints. Based on the given api version, the necessary transformations are being applied.

Hopefully start to see the goodness of this pattern by now. You don't have to add new endpoints when changing the way how they consume or provide data. Another advantage is that you have everything you need already to put together an api changelog, as changes have been described per transformer.

### Usage
Start the example server by running   
```bash
yarn run start
```

A server on portal 5000 will be spawned. Available api calls are:   
```
http://localhost:5000/api/person
http://localhost:5000/api/cars
```

If you want to change the api version that is being used, change it in `index.js`. (Obviously as described above, this version normally is being sent by the api consumer or stored at the consumer data somewhere)

If you want to generate a changelog, you can do so by running
```
yarn run changelog
```


## DISCLAIMER
This repository is solely for educational purposes to explain the pattern, it is by FAR not meant to be used for any production purpose. If you want to use this in production, you have to not only take GET requests into account, but also PUT, POST etc.