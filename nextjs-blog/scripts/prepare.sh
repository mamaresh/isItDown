if [ -d out ]; then
    mv out/_next out/assets
    sed -i '' -e s/\\/_next/\\/assets/g out/**.html
    exit 0
fi