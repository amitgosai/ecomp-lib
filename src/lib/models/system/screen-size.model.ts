export const screenSizes = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    ltsm: 'lt-sm', 
    ltmd: 'lt-md',
    ltlg: 'lt-lg',
    ltxl: 'lt-xl',
    gtxs: 'gt-xs',
    gtsm: 'gt-sm', 
    gtmd: 'gt-md',
    gtlg: 'gt-lg'
};

export interface IScreenSize {
    screenSize: string | undefined;  
    setScreenSizeByPixels(pixel: number): void; 
}

export class ScreenSize implements IScreenSize {
    private _screenSize: string | undefined = '';
    public xs: boolean = false;
    public sm: boolean = false;
    public md: boolean = false;
    public lg: boolean = false;
    public xl: boolean = false;
    public lt_sm: boolean = false;
    public lt_md: boolean = false;
    public lt_lg: boolean = false;
    public lt_xl: boolean = false;
    public gt_xs: boolean = false;
    public gt_sm: boolean = false;
    public gt_md: boolean = false;
    public gt_lg: boolean = false;
  
    constructor();
    constructor(screenSize?: string) {
      this.setScreenProperties(screenSize);
    }
  
    public setScreenSizeByPixels(value: number) {
      if (value <= 599) {
        this.setScreenProperties(screenSizes.xs);
        this.setScreenProperties(screenSizes.ltsm);
        this.setScreenProperties(screenSizes.ltmd);
        this.setScreenProperties(screenSizes.ltlg);
        this.setScreenProperties(screenSizes.ltxl);
      }
      if (value >= 600 && value <= 959) {
        this.setScreenProperties(screenSizes.sm);
        this.setScreenProperties(screenSizes.ltmd);
        this.setScreenProperties(screenSizes.ltlg);
        this.setScreenProperties(screenSizes.ltxl);
        this.setScreenProperties(screenSizes.gtxs);
      }
      if (value >= 960 && value <= 1279) {
        this.setScreenProperties(screenSizes.md);
        this.setScreenProperties(screenSizes.ltlg);
        this.setScreenProperties(screenSizes.ltxl);
        this.setScreenProperties(screenSizes.gtxs);
        this.setScreenProperties(screenSizes.gtsm);
      }
      if (value >= 1280 && value <= 1919) {
        this.setScreenProperties(screenSizes.lg);
        this.setScreenProperties(screenSizes.ltxl);
        this.setScreenProperties(screenSizes.gtxs);
        this.setScreenProperties(screenSizes.gtsm);
        this.setScreenProperties(screenSizes.gtmd);
      }
      if (value >= 1920) {
        this.setScreenProperties(screenSizes.xl);
        this.setScreenProperties(screenSizes.gtxs);
        this.setScreenProperties(screenSizes.gtsm);
        this.setScreenProperties(screenSizes.gtmd);
        this.setScreenProperties(screenSizes.gtlg);
      }
    }
  
    public get screenSize(): string | undefined {
      return this._screenSize;
    }
  
    public set screenSize(value: string | undefined) {
      this.setScreenProperties(value);
    }

    private setScreenProperties(screenSize?: string) {
      this._screenSize = screenSize;
      if(screenSize === screenSizes.xs || screenSize === screenSizes.sm || screenSize === screenSizes.md || screenSize === screenSizes.lg || screenSize === screenSizes.xl) {
        this.xs = false;
        this.sm = false;
        this.md = false;
        this.lg = false;
        this.xl = false;
        this.lt_sm = false;
        this.lt_md = false;
        this.lt_lg = false;
        this.lt_xl = false;
        this.gt_xs = false;
        this.gt_sm = false; 
        this.gt_md = false; 
        this.gt_lg = false;
      }

      switch(screenSize) {
        case screenSizes.xs:
          this.xs = true;
          this.lt_sm = true;
          this.lt_md = true;
          this.lt_lg = true;
          this.lt_xl = true;
          break;
        case screenSizes.sm:
          this.sm = true;
          this.lt_md = true;
          this.lt_lg = true;
          this.lt_xl = true;
          this.gt_xs = true;
          break;
        case screenSizes.md:
          this.md = true;
          this.lt_lg = true;
          this.lt_xl = true;
          this.gt_xs = true;
          this.gt_sm = true;
          break;
        case screenSizes.lg:
          this.lg = true;
          this.lt_xl = true;
          this.gt_xs = true;
          this.gt_sm = true;
          this.gt_md = true;
          break;
        case screenSizes.xl:
          this.xl = true;
          this.xl = true;
          this.gt_xs = true;
          this.gt_sm = true;
          this.gt_md = true;
          this.gt_lg = true;
          break;
        default: 
          break;
      }
    }
  }