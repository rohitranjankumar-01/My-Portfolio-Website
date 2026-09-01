# ============================================================
#  export-source.ps1
#  Collects all main source code files and folders,
#  and zips them into Portfolio-Source.zip
# ============================================================

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$ZipName     = "Portfolio-Source.zip"
$ZipPath     = Join-Path $ProjectRoot $ZipName

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   PORTFOLIO — SOURCE CODE EXPORT       " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Remove old zip if exists
if (Test-Path $ZipPath) {
    Remove-Item $ZipPath -Force
    Write-Host "Removed old $ZipName" -ForegroundColor DarkGray
}

# List of files/folders to include
$Items = @(
    "src",
    "public",
    "package.json",
    "package-lock.json",
    "next.config.ts",
    "tsconfig.json",
    "postcss.config.mjs",
    "tailwind.config.ts",
    ".gitignore",
    "README.md"
)

# Build a temp staging directory
$TempDir = Join-Path $env:TEMP "portfolio-source-temp"
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

# Compress to zip
Write-Host ""
Write-Host "Creating $ZipName..." -ForegroundColor Yellow
Compress-Archive -Path "$TempDir\*" -DestinationPath $ZipPath -Force

# Cleanup temp
Remove-Item $TempDir -Recurse -Force

$SizeMB = [math]::Round((Get-Item $ZipPath).Length / 1MB, 2)

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   DONE!                                " -ForegroundColor Green
Write-Host "   File : $ZipPath" -ForegroundColor Green
Write-Host "   Size : $SizeMB MB" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
