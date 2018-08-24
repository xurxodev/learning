package com.xurxodev.android_platzistore

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*
import org.jetbrains.anko.startActivity
import org.jetbrains.anko.toast

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        toast("Toast from Anko")

        textViewMain.setOnClickListener(View.OnClickListener {
            startActivity<DetailActivity>("text" to "Hello from Anko")
        })
    }
}
