---
title: Upgrading your app from APK to Android App Bundles
---
# Upgrading your app from APK to Android App Bundles

If you previously uploaded a game using an APK, you now need to opt in to "Play App Signing" and then upload an Android App Bundle - that you can build using the latest GDevelop version.

Unfortunately, if you try to release a new version of your game using the Android App Bundle, it won't work because you need to opt in to "Play App Signing" and need specific files for this. Follow this process to get the files and activate "Play App Signing" to distribute new versions of your game.

!!! note

    If you're publishing a brand new game, you can simply upload an Android App Bundle built with GDevelop. Follow [the usual instructions about publishing a game on Google Play](/gdevelop5/publishing/android_and_ios/play-store).

## Case 1: you have already enabled Play App Signing

To check if you've enabled Play App Signing, go to the Play Developer Console, then create a new release in Production, Open testing, Closed testing or Internal testing. Check if Play App Signing is checked or not. If you see this:

![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210722-155252.png)

It means that you're already using Play App Signing for your game (if not, go to next section). If you've only published your game in the past as an Android App Bundle, there is nothing to do.
But if you've already published your game as an APK in the past, you need to build the Android App Bundle using the old "upload key" that was used for your APK.

For this, in GDevelop, before packaging your game, make sure to go to "Signing Options":
![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210722-155535.png)

And choose **"Old upload key"**:
![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210722-155558.png)

Close this dialog and package your game by clicking on **Packaging for Android**.

You can then download and submit the Android App Bundle.

!!! note

    There is nothing else to do, but you must remember to set **Old upload key** before each packaging.

## Case 2: you have not enabled Play App Signing yet

If you have not enabled Play App Signing, you need to enable it. You will be asked for two files when doing this.

### 2.1: Request the encrypted private key and certificate files

Send an email to `contact.gdevapp@gmail.com` with:

* "Upgrade to Google Play Signing" as the subject
* In the body, give the **email of your GDevelop account**, and the **link to the page on the Google Play Store of your game**.

We'll send you back by email the **two files** (encrypted private key and certificate file) that you need for the next step.

### 2.2: Opt-in for Google Play Signing

Create a new release, either in Production, Open testing, Closed testing or Internal Testing in the left menu:

![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210721-165836.png)

Click on the **Opt In** button when you are on the screen to *create a new release*.

![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210721-133413.png)

In the next screen, choose **Export and upload a key from Java keystore**, and then upload 2 files (see next section).

![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210721-162525.png)

### 2.3: Upload the two files

After choosing **Export and upload a key from Java keystore**:

- Click **Upload Private Key** and choose the "encrypted-private-key" file sent to you.
- Click **Show instructions** next to *"For increased security, create a new upload key"* (this is mandatory to do!).
- Click **Upload your upload key certificate** and choose the "upload-key-certificate.pem" file sent to you.

!!! warning

    Be sure that you have set the two files properly (and not just the Private Key). It is **mandatory** to upload the two files before continuing.

The screen should look like this:

![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210721-170955.png)

!!! danger

    It's important that you properly set the **two** files. If you don't set the proper upload key certificate, you will have to use the "Old upload key" for every packaging (see previous section).

### 2.4: Confirm

Click on **Save** after making sure you've both uploaded the *Private Key* **and** the upload key certificate (don't forget it!).

You should see a confirmation page showing some certificates numbers.

## Done! You can now upload your AAB

You can now go back to the screen to create a new release. For example, if you started making an internal release, you can click **Edit release** (this depends on which kind of release you started):

![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210721-140126.png)

You should see in the screen to upload the Android App Bundles something indicating *"Releases signed by Google Play"*.
Click on **Upload** and choose the Android App Bundle (.aab) file that was generated by GDevelop:

![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210721-140304.png)

After uploading the Android App Bundle file, it will be displayed:
![](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab/pasted/20210721-170030.png)

You can then complete the informations and publish the release as usual (enter the release notes, click **Save** then click **Review release**).

!!! note

    If you have an error when uploading the AAB, verify you've properly chosen the "Old upload key" before packaging, in the case you had Play App Signing already activated.
!!! note

    You can ignore all of this if you just upload a new game using the Android App Bundle format, which is now required.