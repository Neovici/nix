{
  description = "Basic dependencies";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        deps = with pkgs; [ nodejs python git ];
      in
      rec {
        packages = flake-utils.lib.flattenTree (with pkgs;  rec {
          devShell = mkShell {
            buildInputs = deps;
            shellHook = ''
              export PATH=$(npm bin):$PATH
              export NIXPKGS_ALLOW_UNFREE=1
              tmux-ui() {
                PROJECT=$(basename $(pwd))
                tmux at -t $PROJECT || SHELL=bash tmux new -s $PROJECT -n term \; \
                  send "npm ci" C-m \; splitw -v -p 50 \; \
                  neww -n tig \; send "tig" C-m \; \
                  neww -n kak \; send "kak" C-m \; \
                  selectw -t 1\; selectp -t 1 \;
              }
              source ${pkgs.git}/share/bash-completion/completions/git
            '';
          };
          testShell = mkShell {
            buildInputs = deps ++ [ firefox google-chrome geckodriver ];
          };
          acceptanceEnv = buildFHSUserEnv {
            name = "acceptance";
            targetPkgs = pkgs: (with pkgs; deps ++ [
              jre
              firefox
              google-chrome
              # chromedriver
              glib
              nspr
              nss
              xorg.libX11
              xorg.libxcb
            ]);
            extraBuildCommands = ''
              chmod +w usr/bin
              ln -sr usr/bin/google-chrome-stable usr/bin/google-chrome
            '';
            runScript= "npm run";
          };
        });
        defaultPackage = packages.devShell;
      }
    );
}
