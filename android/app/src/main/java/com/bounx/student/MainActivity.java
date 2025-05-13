package com.bounx.student;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatDelegate;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // force light
    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);
  }
}
