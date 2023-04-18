version=$1

if [ -z "$version" ]
then
  echo 'Usage: `./npmPublish a.b.c` where `a.b.c` is the intended semantic version'
  exit 1
fi

echo "Publishing version ${version}"

git tag -a "release/${version}" -m "Release ${version}"
yarn install
pushd dist
yarn version --no-git-tag-version --new-version ${version}
npm publish --access public
popd
