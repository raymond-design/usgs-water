import { WaterObject } from '../../water-object';

let testObj = new WaterObject();

let sitenum: number = 39489;

test('Site Major Filter-number too small', async () => {
  await testObj.from('site',sitenum).catch(e => {
    expect(e.message).toBe('Invalid filter type');
  });
});

test('Site Major Filter-number too big', async () => {
  sitenum = 3948989789483948;
  await testObj.from('site',sitenum).catch(e => {
    expect(e.message).toBe('Invalid filter type');
  });
});

test('Site Major Filter-not a number', async () => {
  await testObj.from('site',"dhh").catch(e => {
    expect(e.message).toBe('Invalid filter type');
  });
});

test('Site Major Filter-wrong arguments', async () => {
  await testObj.from('site',sitenum,'dd').catch(e => {
    expect(e.message).toBe('Invalid filter type');
  });
});

test('Site Major Filter-wrong arguments', async () => {
  await testObj.from('site',false).catch(e => {
    expect(e.message).toBe('Invalid filter type');
  });
});

it('Site Major Filter-Correct Arguments', () => {
  sitenum = 39489999;
  let sitenum2: number = 39393949;
  //expect.assertions(1);
  return expect(testObj.from('site',sitenum,sitenum2)).resolves.toEqual('Major Filter Added');
});