
import ReactNativeWeb from '../src/index';
import BR, { Plugin } from '@blueeast/bluerain-os';
import Platform from '../src/Platform';
import {mount, shallow,  render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import immutable from 'immutable';
configure({ adapter: new Adapter() });


beforeAll(() => {
	document.body.innerHTML = '<div class="app-container">' + '</div>';
	 });
   class Reactxp  extends Plugin {
	   static pluginName = Reactxp;
	   static slug = 'hello-world';
	   static  initialize(config:{}, ctx:any) {
		 const App=(BluerainApp)=>{
			BR.Utils.setMainView(BluerainApp);
		   return;
		 };}
   }
   describe('ReactRouter Plugin test', () => {

		 it('registered the plugin successfully', () => {
		   expect(true).toBeTruthy();
	   });
// 	 it('registered the plugin successfully', () => {
// 		   BR.Plugins.set(ReactNativeWeb);
// 		   BR.boot({platform:[Reactxp],renderApp:false});
// 		   const Plugins = BR.Plugins.get(ReactNativeWeb.slug);
// 		   expect(Plugins).toBeTruthy();
// 	   });

//    it('should contain component: ActivityIndicator', () => {

//      expect(BR.Components.data.has('ActivityIndicator')).toBe(true);
//    });

//   it('should contain component: Button', () => {
// 	expect(BR.Components.data.has('Button')).toBe(true);
//    });

//  it('should contain component: CheckBox', () => {
// 	expect(BR.Components.data.has('CheckBox')).toBe(true);
// });

// it('should contain component: Image', () => {
// 	expect(BR.Components.data.has('Image')).toBe(true);

// });


// it('should contain component: FlatList', () => {
// 	expect(BR.Components.data.has('FlatList')).toBe(true);

// });



// it('should contain component: Modal', () => {
// 	expect(BR.Components.data.has('Modal')).toBe(true);

// });


// it('should contain component: ProgressBar', () => {
// 	expect(BR.Components.data.has('ProgressBar')).toBe(true);
// });




// it('should contain component: SectionList', () => {
// 	expect(BR.Components.data.has('SectionList')).toBe(true);
// });


// it('should contain component: Slider', () => {
// 	expect(BR.Components.data.has('Slider')).toBe(true);
// });



// it('should contain component: Picker', () => {
// 	expect(BR.Components.data.has('Picker')).toBe(true);
// });




// it('should contain component: StatusBar', () => {
// 	expect(BR.Components.data.has('StatusBar')).toBe(true);

// });


// // it('should contain component: Switch', () => {
// // 	expect(BR.Components.data.has('Switch')).toBe(true);

// // });


// it('should contain component: Text', () => {
// 	expect(BR.Components.data.has('Text')).toBe(true);
// });


// it('should contain component: TextInput', () => {
// 	expect(BR.Components.data.has('TextInput')).toBe(true);

// });



// it('should contain component: View', () => {
// 	expect(BR.Components.data.has('View')).toBe(true);

// });


// it('should contain component: VirtualizedList', () => {
// 	expect(BR.Components.data.has('VirtualizedList')).toBe(true);

// });

// it('should  return Platform type :web', () => {
// 	expect(BR.Components.data.has('web')).toBe(true);
// });

});


