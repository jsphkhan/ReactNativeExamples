## Degree Component for React Native Apps

A degree component for apps dealing with weather temperatures. for eg. 23 degree celcius, 41 degree fahrenheit. 
This component uses React Native <View /> component to create the circular structure rather than a png icon. Refer the screenshot below.

#### Screenshot
<img src="http://jsphkhan.github.io/DegreeComponent/degree.png" />

#### How to use?
###### Import the component
```bash
var DegreeComponent = require('../Components/DegreeComponent');
```
###### Use it inside your render() method
```bash
  <DegreeComponent style={{width:6, height: 6, borderRadius: 3, marginTop: -10}}></DegreeComponent>
```

###### Define your own dimensions by changing attributes
```bash
  <DegreeComponent style={{width:20, height: 20, borderRadius: 10, marginTop: 0}}></DegreeComponent>
```


### Why this component?
This component as such does not make any sense. But when I was developing the [Weather App](https://github.com/jsphkhan/ReactNativeExamples/blob/master/ios/WeatherApp/) I found the need for it. I prefered creating a component rather than using an image.

### Questions?
Feel free to contact me on [twitter](https://twitter.com/joseph_rialab) or [create an issue](https://github.com/jsphkhan/ReactNativeExamples/issues/new)

###License

####The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

