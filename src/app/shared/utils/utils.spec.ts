import {utils, getStorageRefFromFileUri} from "@app/shared/utils/utils";

describe('getFileUri', () => {
  it('should provide utils', () => {
    expect(utils('/some-path')).toEqual('https://firebasestorage.googleapis.com/v0/b/bierkuh-ef2d6.appspot.com/o/some-path?alt=media')
    expect(utils('/some-path/sub-path')).toEqual('https://firebasestorage.googleapis.com/v0/b/bierkuh-ef2d6.appspot.com/o/some-path%2Fsub-path?alt=media')
  });
  it('should getStorageRefFromFileUri', () => {
    expect(getStorageRefFromFileUri('https://firebasestorage.googleapis.com/v0/b/bierkuh-ef2d6.appspot.com/o/crown-caps%2F10_HK.jpg?alt=media')).toEqual('/crown-caps/10_HK.jpg')
  });
});
