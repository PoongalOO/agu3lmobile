package com.android.agu3l;

import android.app.activity;
import android.os.Bundle;
import org.apache.cordova.*;

public class Agu3lActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}