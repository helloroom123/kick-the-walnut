@echo off
echo ==========================================
echo    Kick The Walnut - Auto APK Builder
echo ==========================================
echo.
echo [1/3] Building Web Assets (dist)...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Web Build Failed! Check your code.
    pause
    exit /b %errorlevel%
)

echo.
echo [2/3] Syncing Assets to Android Project...
call npx cap sync android
if %errorlevel% neq 0 (
    echo [ERROR] Sync Failed!
    pause
    exit /b %errorlevel%
)

echo.
echo [3/3] Compiling APK using Android SDK...
echo (This may take a few minutes, please wait)
cd android
call gradlew assembleDebug
if %errorlevel% neq 0 (
    echo.
    echo ==========================================
    echo [ERROR] APK Build Failed!
    echo Possible reasons:
    echo 1. Java (JAVA_HOME) is not configured correctly.
    echo 2. Android SDK (ANDROID_HOME) is not configured correctly.
    echo Please check your environment variables or open the project in Android Studio.
    echo ==========================================
    pause
    exit /b %errorlevel%
)

cd ..
echo.
echo ==========================================
echo SUCCESS! APK Generated Successfully!
echo ==========================================
echo Copying APK to current directory...
copy /Y "android\app\build\outputs\apk\debug\app-debug.apk" "Kick-The-Walnut-Latest.apk"
echo.
echo Your APK file is ready: Kick-The-Walnut-Latest.apk
echo You can now send it to your phone to install!
echo.
pause
