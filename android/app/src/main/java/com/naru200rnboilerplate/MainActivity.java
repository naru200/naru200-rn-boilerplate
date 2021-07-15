package com.naru200rnboilerplate;

import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Naru200RNBoilerplate";
  }

  /**
   * For react-navigation initialize
   * ref => https://reactnavigation.org/docs/6.x/getting-started
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
