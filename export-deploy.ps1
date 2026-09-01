# ============================================================
#  export-deploy.ps1
#  Collects all files needed to deploy the portfolio on
#  Vercel / Netlify / any platform that builds from source.
#  (.next is NOT included — the platform builds it itself)
# ============================================================

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$ZipName     = "Portfolio-Deploy.zip"
$ZipPath     = Join-Path $ProjectRoot $ZipName

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   PORTFOLIO — DEPLOYMENT EXPORT        " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Remove old zip if exists
if (Test-Path $ZipPath) {
    Remove-Item $ZipPath -Force
    Write-Host "Removed old $ZipName" -ForegroundColor DarkGray
}

# Files/folders required by Vercel / Netlify to build & run
$Items = @(
    "src",
    "public",
    "package.json",
    "package-lock.json",
    "next.config.ts",
    "tsconfig.json",
    "postcss.config.mjs",
    "tailwind.config.ts"
)

$TempDir = Join-Path $env:TEMP "portfolio-deploy-temp"
if (Test-Path $TempDir) { Remove-Item $TempDir -Recurse -Force }
New-Item -ItemType Directory -Path $TempDir | Out-Null

Write-Host "Collecting files..." -ForegroundColor Yellow
foreach ($item in $Items) {
    $src = Join-Path $ProjectRoot $item
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $TempDir -Recurse -Force
        Write-Host "  + $item" -ForegroundColor Green
    } else {
        Write-Host "  - $item (not found, skipped)" -ForegroundColor DarkGray
    }
}

Write-Host ""
Write-Host "Creating $ZipName..." -ForegroundColor Yellow
Compress-Archive -Path "$TempDir\*" -DestinationPath $ZipPath -Force
Remove-Item $TempDir -Recurse -Force

$SizeMB = [math]::Round((Get-Item $ZipPath).Length / 1MB, 2)

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   DONE!                                " -ForegroundColor Green
Write-Host "   File : $ZipPath" -ForegroundColor Green
Write-Host "   Size : $SizeMB MB" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Deploy instructions:" -ForegroundColor White
Write-Host "  Vercel  — import repo or drag folder at vercel.com/new" -ForegroundColor Gray
Write-Host "  Netlify — drag zip at app.netlify.com/drop" -ForegroundColor Gray
Write-Host ""
Write-Host "NOTE: Do NOT include node_modules or .next — the" -ForegroundColor DarkGray
Write-Host "      deployment platform will generate these itself." -ForegroundColor DarkGray
Write-Host ""

