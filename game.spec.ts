

export class SimpleSpec {

    @Element('body')
    protected element: WebdriverIO.Element;

    @Elements(['.stage', '#grid', 'div'])
    public box: WebdriverIO.ElementArray;

    @Element('#time')
    public time: WebdriverIO.Element;

    @Elements(['#ad_position_box', '#dismiss-button'])
    public dismissButton: WebdriverIO.Element;

    @Element('#ad_position_box')
    public  adPositionBox: WebdriverIO.Element;

    public firstGame() {

        browser.navigateTo('http://zzzscore.com/1to50/en/?ts=1');

        for (var i = 1; i < 51; i++) {
            this.clickOnBox(i);
        }
    
       const  result = this.time.getText();
        console.log('Result is '+result)
    }


    private clickOnBox(index) {
        for (var i = 0; i < this.box.length; i++) {
            const tttt = this.box[i].getText();
            if (tttt == index) {
                this.box[i].click();
                return;
            }

        }
    }
}